-- English Practice — privacidade dos endereços de internet (rodar no SQL Editor do Supabase,
-- depois de supabase-setup.sql, supabase-protecao.sql e supabase-estatisticas.sql).
-- Pode ser rodado mais de uma vez sem problema.
--
-- O que este script faz:
--   1. O endereço de internet (IP) deixa de ser guardado. Os limites contra abuso passam a usar
--      uma "impressão" do endereço: um hash SHA-256 do IP com um segredo aleatório do dia.
--   2. O segredo do dia é apagado no dia seguinte. Sem ele, ninguém (nem o dono do banco)
--      consegue saber de qual endereço veio uma impressão antiga.
--   3. Apaga todos os registros antigos que ainda tinham o IP puro.
--   4. Limpeza garantida: registros de uso com mais de 1 dia são apagados a cada chamada
--      (antes, só em 1 de cada 20) e, se a extensão pg_cron estiver ativada, também uma vez por dia,
--      mesmo sem nenhum acesso ao site.

-- ---------- Segredo do dia ----------
create table if not exists public.ip_salt (
  day  date primary key,
  salt text not null
);
alter table public.ip_salt enable row level security;
revoke all on table public.ip_salt from anon, authenticated;

-- ---------- Impressão do endereço ----------
-- Mesmo nome da função antiga: create_session, get_session e log_events continuam iguais
-- e passam a gravar a impressão no lugar do IP.
create or replace function public._client_ip() returns text
language plpgsql volatile security definer set search_path = public as $$
declare h json; raw text; s text;
begin
  begin
    h := nullif(current_setting('request.headers', true), '')::json;
  exception when others then
    h := null;
  end;
  raw := coalesce(
    nullif(h->>'cf-connecting-ip', ''),
    nullif(h->>'x-real-ip', ''),
    nullif(trim(split_part(h->>'x-forwarded-for', ',', 1)), ''),
    'desconhecido');

  select salt into s from ip_salt where day = current_date;
  if s is null then
    insert into ip_salt(day, salt)
      values (current_date, md5(random()::text || clock_timestamp()::text) || md5(random()::text))
      on conflict (day) do nothing;
    select salt into s from ip_salt where day = current_date;
    delete from ip_salt where day < current_date;
  end if;

  return encode(sha256(convert_to(raw || '|' || s, 'UTF8')), 'hex');
end $$;
revoke all on function public._client_ip() from public, anon, authenticated;

-- ---------- Limpeza ----------
create or replace function public._housekeeping() returns void
language plpgsql security definer set search_path = public as $$
begin
  delete from rate_events where at < now() - interval '1 day';
  delete from ip_salt where day < current_date;
  if random() < 0.05 then
    delete from sessions
      where created_at < now() - interval '30 days'
        and updated_at = created_at
        and (data = '{}'::jsonb or data = '{"progress":{}}'::jsonb);
  end if;
end $$;
revoke all on function public._housekeeping() from public, anon, authenticated;

-- ---------- Apaga os registros antigos com IP puro ----------
-- Uma impressão SHA-256 tem 64 caracteres hexadecimais; o resto é IP puro.
delete from public.rate_events where ip !~ '^[0-9a-f]{64}$';

-- ---------- Limpeza diária automática (opcional) ----------
-- Só funciona se a extensão pg_cron estiver ativada (Database → Extensions → pg_cron).
-- Sem ela, a limpeza continua acontecendo a cada acesso ao site.
do $$
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.unschedule(jobid) from cron.job where jobname = 'english-practice-limpeza';
    perform cron.schedule('english-practice-limpeza', '17 6 * * *',
      $job$ delete from public.rate_events where at < now() - interval '1 day';
            delete from public.ip_salt where day < current_date; $job$);
    raise notice 'Limpeza diária agendada (pg_cron).';
  else
    raise notice 'pg_cron não está ativado: a limpeza acontece a cada acesso ao site.';
  end if;
end $$;
