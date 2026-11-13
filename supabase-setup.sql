-- English Practice — configuração do banco (rodar uma vez no SQL Editor do Supabase)

-- 1. Tabela das sessões. O código em si nunca é guardado: só o hash dele.
create table if not exists public.sessions (
  code_hash  text primary key check (code_hash ~ '^[0-9a-f]{64}$'),
  data       jsonb not null default '{}'::jsonb check (pg_column_size(data) < 200000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Ninguém acessa a tabela diretamente (sem listar, sem apagar).
alter table public.sessions enable row level security;
revoke all on table public.sessions from anon, authenticated;

-- 3. O site só conversa com o banco por estas três funções.
create or replace function public.create_session(p_hash text)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  insert into sessions(code_hash) values (p_hash);
  return true;
exception when unique_violation then
  return false;
end $$;

create or replace function public.get_session(p_hash text)
returns jsonb language sql stable security definer set search_path = public as $$
  select data from sessions where code_hash = p_hash;
$$;

create or replace function public.save_session(p_hash text, p_data jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  update sessions set data = p_data, updated_at = now() where code_hash = p_hash;
  return found;
end $$;

revoke all on function public.create_session(text)        from public;
revoke all on function public.get_session(text)           from public;
revoke all on function public.save_session(text, jsonb)   from public;
grant execute on function public.create_session(text)      to anon, authenticated;
grant execute on function public.get_session(text)         to anon, authenticated;
grant execute on function public.save_session(text, jsonb) to anon, authenticated;
