-- English Practice — proteção contra abuso (rodar uma vez no SQL Editor do Supabase, depois do supabase-setup.sql)
-- Pode ser rodado mais de uma vez sem problema.
--
-- O que este script faz:
--   1. Limita a criação de códigos por endereço de internet e por dia.
--   2. Recusa códigos novos se as tabelas passarem de 300 MB (os alunos existentes continuam salvando).
--   3. Limita tentativas de entrada com código errado, por endereço e no total (impede adivinhação em massa).
--   4. Reduz o tamanho máximo de cada sessão de 200 KB para 100 KB.
--   5. Apaga códigos criados há mais de 30 dias que nunca foram usados.
-- Para ajustar os limites, altere os números na seção "Limites" e rode o script de novo.

-- ---------- Limites ----------
create or replace function public._limit(p_name text) returns int
language sql immutable as $$
  select case p_name
    when 'create_per_ip_hour'  then 10    -- códigos novos por endereço, por hora
    when 'create_per_day'      then 100   -- códigos novos no total, por dia
    when 'miss_per_ip_hour'    then 30    -- códigos errados por endereço, por hora
    when 'miss_global_hour'    then 2000  -- códigos errados no total, por hora
    when 'table_max_mb'        then 300   -- tamanho máximo das tabelas (sessões + registro de uso)
  end
$$;

-- ---------- Registro de uso ----------
create table if not exists public.rate_events (
  id   bigserial primary key,
  ip   text not null,
  kind text not null,
  at   timestamptz not null default now()
);
create index if not exists rate_events_kind_ip_at on public.rate_events (kind, ip, at);
create index if not exists rate_events_kind_at    on public.rate_events (kind, at);
alter table public.rate_events enable row level security;
revoke all on table public.rate_events from anon, authenticated;
revoke all on sequence public.rate_events_id_seq from anon, authenticated;

-- Endereço de quem chamou (o Supabase repassa os cabeçalhos da requisição).
-- cf-connecting-ip é preenchido pela Cloudflare com o endereço real e não pode ser falsificado pelo cliente;
-- x-forwarded-for pode ser escrito pelo próprio cliente, por isso fica por último.
create or replace function public._client_ip() returns text
language plpgsql stable as $$
declare h json;
begin
  begin
    h := nullif(current_setting('request.headers', true), '')::json;
  exception when others then
    h := null;
  end;
  return coalesce(
    nullif(h->>'cf-connecting-ip', ''),
    nullif(h->>'x-real-ip', ''),
    nullif(trim(split_part(h->>'x-forwarded-for', ',', 1)), ''),
    'desconhecido');
end $$;

-- Quantos eventos deste tipo houve neste intervalo (deste endereço, ou de todos se p_ip for nulo).
create or replace function public._count(p_kind text, p_ip text, p_window interval) returns int
language sql stable as $$
  select count(*)::int from public.rate_events
  where kind = p_kind and at > now() - p_window and (p_ip is null or ip = p_ip)
$$;

-- Limpeza ocasional (cerca de 1 a cada 20 chamadas de criar código ou de entrar):
-- eventos com mais de 1 dia e códigos nunca usados com mais de 30 dias.
create or replace function public._housekeeping() returns void
language plpgsql security definer set search_path = public as $$
begin
  if random() < 0.05 then
    delete from rate_events where at < now() - interval '1 day';
    delete from sessions
      where created_at < now() - interval '30 days'
        and updated_at = created_at
        and (data = '{}'::jsonb or data = '{"progress":{}}'::jsonb);
  end if;
end $$;

-- Tamanho total ocupado pelas duas tabelas, em bytes.
create or replace function public._storage_bytes() returns bigint
language sql stable as $$
  select pg_total_relation_size('public.sessions') + pg_total_relation_size('public.rate_events')
$$;

-- ---------- Tamanho máximo de cada sessão: 100 KB ----------
alter table public.sessions drop constraint if exists sessions_data_check;
alter table public.sessions drop constraint if exists sessions_data_size;
alter table public.sessions add constraint sessions_data_size check (pg_column_size(data) < 100000);

-- ---------- As três funções do site, agora com limites ----------
create or replace function public.create_session(p_hash text)
returns boolean language plpgsql security definer set search_path = public as $$
declare v_ip text := _client_ip();
begin
  perform _housekeeping();
  if _storage_bytes() > _limit('table_max_mb')::bigint * 1024 * 1024 then
    raise exception 'limite: armazenamento';
  end if;
  if _count('create', v_ip, interval '1 hour') >= _limit('create_per_ip_hour')
     or _count('create', null, interval '1 day') >= _limit('create_per_day') then
    raise exception 'limite: criacao';
  end if;
  insert into rate_events(ip, kind) values (v_ip, 'create');
  insert into sessions(code_hash) values (p_hash);
  return true;
exception when unique_violation then
  return false;
end $$;

create or replace function public.get_session(p_hash text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_ip text := _client_ip(); v_data jsonb;
begin
  perform _housekeeping();
  if _count('miss', v_ip, interval '1 hour') >= _limit('miss_per_ip_hour') then
    raise exception 'limite: tentativas';
  end if;
  select data into v_data from sessions where code_hash = p_hash;
  if not found then
    -- Teto geral: protege contra ataques vindos de muitos endereços (e o registro de crescer sem fim).
    if _count('miss', null, interval '1 hour') >= _limit('miss_global_hour') then
      raise exception 'limite: tentativas';
    end if;
    insert into rate_events(ip, kind) values (v_ip, 'miss');
    return null;
  end if;
  return v_data;
end $$;

create or replace function public.save_session(p_hash text, p_data jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if pg_column_size(p_data) >= 100000 then
    raise exception 'limite: tamanho';
  end if;
  update sessions set data = p_data, updated_at = now() where code_hash = p_hash;
  return found;
end $$;

-- ---------- Permissões: o site só chama as três funções ----------
revoke all on function public._limit(text)                     from public, anon, authenticated;
revoke all on function public._client_ip()                     from public, anon, authenticated;
revoke all on function public._count(text, text, interval)     from public, anon, authenticated;
revoke all on function public._housekeeping()                  from public, anon, authenticated;
revoke all on function public._storage_bytes()                 from public, anon, authenticated;
revoke all on function public.create_session(text)             from public;
revoke all on function public.get_session(text)                from public;
revoke all on function public.save_session(text, jsonb)        from public;
grant execute on function public.create_session(text)          to anon, authenticated;
grant execute on function public.get_session(text)             to anon, authenticated;
grant execute on function public.save_session(text, jsonb)     to anon, authenticated;
