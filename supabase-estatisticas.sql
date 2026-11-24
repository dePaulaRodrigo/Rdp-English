-- English Practice — estatísticas de uso (rodar no SQL Editor do Supabase, depois de supabase-protecao.sql)
-- Pode ser rodado mais de uma vez sem problema.
--
-- O que é guardado: só contadores por dia. Ex.: "lição numbers, aba Explicação, em PT, Brasil, celular: 7 vezes".
-- O que NÃO é guardado: endereço de internet, código, hash do código ou qualquer identificador do aluno.
-- O país vem do cabeçalho cf-ipcountry, preenchido pela Cloudflare a partir do endereço; o endereço é descartado.
--
-- Para consultar: Table Editor → esquema "estatisticas" (canto superior esquerdo), ou SQL Editor:
--   select * from estatisticas.exercicios;
-- O site não tem acesso ao esquema "estatisticas".

-- ---------- Tabela de contadores ----------
create table if not exists public.stats_daily (
  day      date     not null default current_date,
  kind     text     not null,
  lesson   text     not null default '',
  exercise text     not null default '',
  item     int      not null default 0,
  detail   text     not null default '',
  ok       smallint not null default 0,   -- 0 = não se aplica · 1 = certo / sim · 2 = errado / não
  lang     text     not null default '',
  country  text     not null default '',
  device   text     not null default '',
  n        int      not null default 0,   -- quantas vezes
  total    bigint   not null default 0,   -- soma das notas (%) nos eventos "done"
  secs     bigint   not null default 0,   -- soma dos segundos nos eventos "done"
  primary key (day, kind, lesson, exercise, item, detail, ok, lang, country, device)
);
alter table public.stats_daily enable row level security;
revoke all on table public.stats_daily from anon, authenticated;

create or replace function public._country() returns text
language plpgsql stable set search_path = public as $$
declare h json;
begin
  begin h := nullif(current_setting('request.headers', true), '')::json; exception when others then h := null; end;
  return coalesce(nullif(upper(left(h->>'cf-ipcountry', 2)), ''), '??');
end $$;

-- Texto curto e só com caracteres comuns (o resto é descartado). Sem < > " ; nem quebras de linha.
-- Respostas digitadas pelos alunos (detail de 'answer') ficam com no máximo 40 caracteres.
create or replace function public._st(v text, maxlen int) returns text
language sql immutable set search_path = public as $$
  select left(regexp_replace(coalesce(v, ''), '[^[:alnum:] .,/$%½¼¾°''’:()-]', '', 'g'), maxlen)
$$;

-- ---------- Função chamada pelo site ----------
-- Recebe uma lista de eventos e soma nos contadores do dia. Nunca dá erro para o site:
-- se passar dos limites ou vier algo inválido, o evento é simplesmente ignorado.
create or replace function public.log_events(p_events jsonb)
returns void language plpgsql security definer set search_path = public as $$
declare
  v_ip text := _client_ip();
  v_country text := _country();
  e jsonb;
  v_kind text; v_ok int; v_item int; v_total int; v_secs int;
begin
  if jsonb_typeof(p_events) <> 'array' then return; end if;
  -- Limites: 300 envios por endereço por hora; 20.000 no total por hora; tabela de até 50 MB.
  if _count('stats', v_ip, interval '1 hour') >= 300
     or _count('stats', null, interval '1 hour') >= 20000
     or pg_total_relation_size('public.stats_daily') > 50 * 1024 * 1024 then
    return;
  end if;
  insert into rate_events(ip, kind) values (v_ip, 'stats');
  perform _housekeeping();

  for e in select value from jsonb_array_elements(p_events) limit 60 loop
    continue when jsonb_typeof(e) <> 'object';
    v_kind := e->>'k';
    continue when v_kind is null or v_kind not in
      ('visit','code','home','area','lesson','tab','lang','ex','answer','done','redo','reveal','audio');
    v_ok    := case when e->>'ok' in ('1','2') then (e->>'ok')::int else 0 end;
    v_item  := case when (e->>'i') ~ '^[0-9]{1,3}$' then (e->>'i')::int else 0 end;
    v_total := case when (e->>'s') ~ '^[0-9]{1,3}$' then least((e->>'s')::int, 100) else 0 end;
    v_secs  := case when (e->>'t') ~ '^[0-9]{1,4}$' then least((e->>'t')::int, 3600) else 0 end;
    insert into stats_daily as d (kind, lesson, exercise, item, detail, ok, lang, country, device, n, total, secs)
    values (v_kind, _st(e->>'l', 40), _st(e->>'x', 40), v_item, _st(e->>'d', case when v_kind = 'answer' then 40 else 80 end), v_ok,
            _st(e->>'g', 5), v_country, _st(e->>'v', 10), 1, v_total, v_secs)
    on conflict (day, kind, lesson, exercise, item, detail, ok, lang, country, device)
    do update set n = d.n + 1, total = d.total + excluded.total, secs = d.secs + excluded.secs;
  end loop;
end $$;

revoke all on function public._country()              from public, anon, authenticated;
revoke all on function public._st(text, int)          from public, anon, authenticated;
revoke all on function public.log_events(jsonb)       from public;
grant execute on function public.log_events(jsonb)    to anon, authenticated;

-- ---------- Consultas prontas (esquema separado, fora do alcance do site) ----------
create schema if not exists estatisticas;
revoke all on schema estatisticas from public, anon, authenticated;

-- Alunos: contados pelos códigos (sem saber quem é quem).
create or replace view estatisticas.alunos as
select count(*)                                                   as codigos_criados,
       count(*) filter (where updated_at > created_at)            as codigos_usados,
       count(*) filter (where updated_at > now() - interval '7 days')  as ativos_7_dias,
       count(*) filter (where updated_at > now() - interval '30 days') as ativos_30_dias
from public.sessions;

-- Acessos por dia (cada abertura do site conta uma vez). retornando = aparelho que já tinha um código salvo.
create or replace view estatisticas.acessos_por_dia as
select day as dia, sum(n) as acessos,
       sum(n) filter (where ok = 1) as retornando,
       sum(n) filter (where ok = 2) as primeira_vez,
       sum(n) filter (where device = 'celular') as celular,
       sum(n) filter (where device = 'computador') as computador
from public.stats_daily where kind = 'visit'
group by day order by day desc;

create or replace view estatisticas.paises as
select country as pais, sum(n) as acessos, max(day) as ultimo_acesso
from public.stats_daily where kind = 'visit'
group by country order by acessos desc;

-- Idioma configurado no navegador do aluno (ex.: pt-BR, es-AR).
create or replace view estatisticas.idioma_do_navegador as
select detail as idioma, sum(n) as acessos
from public.stats_daily where kind = 'visit'
group by detail order by acessos desc;

-- Abas da página inicial e páginas das áreas profissionais.
create or replace view estatisticas.areas as
select case kind when 'home' then 'Aba: ' || case detail when 'daily' then 'Inglês Cotidiano' when 'pro' then 'Inglês Profissional' else detail end
                 else 'Área: ' || detail end as onde,
       sum(n) as acessos
from public.stats_daily where kind in ('home','area')
group by 1 order by acessos desc;

create or replace view estatisticas.licoes as
select lesson as licao, sum(n) as aberturas, max(day) as ultima_abertura
from public.stats_daily where kind = 'lesson'
group by lesson order by aberturas desc;

-- Abas da lição: Explicação, Prática, Vocabulário.
create or replace view estatisticas.abas as
select lesson as licao,
       sum(n) filter (where detail = 'expl')  as explicacao,
       sum(n) filter (where detail = 'ex')    as pratica,
       sum(n) filter (where detail = 'vocab') as vocabulario
from public.stats_daily where kind = 'tab'
group by lesson order by lesson;

-- Idioma das explicações em uso (em todas as ações dentro das lições) e trocas feitas pelo aluno no seletor.
create or replace view estatisticas.idiomas as
select lang as idioma,
       sum(n) filter (where kind <> 'lang') as acoes_neste_idioma,
       sum(n) filter (where kind = 'lang')  as vezes_escolhido_no_seletor
from public.stats_daily where lang <> ''
group by lang order by acoes_neste_idioma desc nulls last;

-- Exercícios: aberturas, conclusões, nota média e tempo médio.
create or replace view estatisticas.exercicios as
with a as (
  select lesson, exercise,
         sum(n) filter (where kind = 'ex')     as aberturas,
         sum(n) filter (where kind = 'done')   as conclusoes,
         sum(total) filter (where kind = 'done') as soma_notas,
         sum(secs)  filter (where kind = 'done') as soma_segs,
         sum(n) filter (where kind = 'redo')   as refeitos,
         sum(n) filter (where kind = 'reveal') as revelar_respostas,
         sum(n) filter (where kind = 'audio')  as audios_tocados
  from public.stats_daily where exercise <> ''
  group by lesson, exercise)
select lesson as licao, exercise as exercicio, aberturas, conclusoes,
       round(100.0 * conclusoes / nullif(aberturas, 0)) as taxa_conclusao_pct,
       round(1.0 * soma_notas / nullif(conclusoes, 0)) as nota_media_pct,
       round(soma_segs / 60.0 / nullif(conclusoes, 0), 1) as tempo_medio_min,
       refeitos, revelar_respostas, audios_tocados
from a order by lesson, exercise;

-- Itens: taxa de erro de cada questão ou lacuna, com a resposta errada mais comum.
create or replace view estatisticas.itens as
with r as (
  select lesson, exercise, item, detail, ok, sum(n) as n
  from public.stats_daily where kind = 'answer'
  group by lesson, exercise, item, detail, ok),
t as (
  select lesson, exercise, item, sum(n) as respostas, sum(n) filter (where ok = 2) as erros
  from r group by lesson, exercise, item),
w as (
  select distinct on (lesson, exercise, item) lesson, exercise, item,
         case when detail = '' then '(em branco)' else detail end as errada_mais_comum, n as vezes
  from r where ok = 2 order by lesson, exercise, item, n desc)
select t.lesson as licao, t.exercise as exercicio, t.item, t.respostas, coalesce(t.erros, 0) as erros,
       round(100.0 * coalesce(t.erros, 0) / nullif(t.respostas, 0)) as taxa_erro_pct,
       w.errada_mais_comum, w.vezes
from t left join w using (lesson, exercise, item)
order by taxa_erro_pct desc nulls last, respostas desc;

-- Todas as respostas erradas escolhidas, por item (para ver quais distratores funcionam).
create or replace view estatisticas.respostas_erradas as
select lesson as licao, exercise as exercicio, item,
       case when detail = '' then '(em branco)' else detail end as resposta, sum(n) as vezes
from public.stats_daily where kind = 'answer' and ok = 2
group by lesson, exercise, item, detail
order by lesson, exercise, item, vezes desc;

-- Celular × computador.
create or replace view estatisticas.dispositivos as
select device as dispositivo, sum(n) as acessos
from public.stats_daily where kind = 'visit'
group by device order by acessos desc;

-- ---------- Níveis dos alunos (preenchidos quando o teste de nivelamento e a trilha existirem) ----------
-- Lidos dos dados de cada código (data.levels): start = nível inicial (teste de nivelamento), cur = nível atual.
-- Só totais: nenhuma consulta mostra códigos. O código de professor (#nao-contar) fica de fora.
create or replace function estatisticas._date(v text) returns date
language plpgsql immutable as $$
begin
  return case when v ~ '^\d{4}-\d{2}-\d{2}$' then v::date end;
exception when others then return null;
end $$;

create or replace view estatisticas._niveis as
select data->'levels'->'start'->>'l'                                   as inicial,
       coalesce(data->'levels'->'cur'->>'l', data->'levels'->'start'->>'l') as atual,
       estatisticas._date(data->'levels'->'start'->>'at')              as inicial_em,
       estatisticas._date(data->'levels'->'cur'->>'at')                as atual_em,
       updated_at > now() - interval '30 days'                         as ativo_30_dias
from public.sessions
where data ? 'levels'
  and coalesce(data->'prefs'->>'noStats', '') <> 'true';

create or replace view estatisticas.niveis_iniciais as
select inicial as nivel, count(*) as alunos, count(*) filter (where ativo_30_dias) as ativos_30_dias
from estatisticas._niveis where inicial is not null
group by inicial order by inicial;

create or replace view estatisticas.niveis_atuais as
select atual as nivel, count(*) as alunos, count(*) filter (where ativo_30_dias) as ativos_30_dias
from estatisticas._niveis where atual is not null
group by atual order by atual;

-- De que nível os alunos partiram e onde estão agora, com o tempo médio entre os dois.
create or replace view estatisticas.niveis_evolucao as
select inicial, atual, count(*) as alunos,
       round(avg(atual_em - inicial_em) / 30.0, 1) as meses_em_media
from estatisticas._niveis where inicial is not null
group by inicial, atual order by inicial, atual;

revoke all on all tables in schema estatisticas from public, anon, authenticated;
revoke all on all functions in schema estatisticas from public, anon, authenticated;
