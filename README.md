# English Practice

Site de exercícios de inglês para alunos brasileiros, com sessão por código de 4 palavras (sem login e sem senha).

## Arquivos
- `index.html`: o site (telas, sessão, exercícios, textos da interface).
- `lessons/`: uma lição por arquivo, mais o catálogo gerado. Formato em `lessons/README.md`.
- `tools/build.mjs`: confere as lições e gera `lessons/catalog.js`. Rode `node tools/build.mjs` após qualquer mudança em `lessons/`.
- `supabase-setup.sql`: configuração inicial do banco (Supabase).
- `supabase-protecao.sql`: limites contra abuso. Pode ser rodado de novo a cada atualização.

## Como o progresso é guardado
- No banco, só o hash SHA-256 do código, nunca o código.
- O site acessa o banco apenas por três funções (`create_session`, `get_session`, `save_session`); as tabelas são fechadas.
- No aparelho, uma cópia local indexada pelo hash serve para uso sem internet. Ao tocar em "Sair", ela é apagada depois do envio.
- Cada envio lê o que está no servidor e junta com o local, exercício por exercício (vale a alteração mais recente; a melhor nota é a maior das duas). Assim, progresso feito em outro aparelho ou sem internet não se perde.

## Regras
- Não mudar o `id` de uma lição ou de um exercício já publicado: o progresso dos alunos fica guardado por ele.
- Toda tabela nova no banco precisa nascer com RLS ativado e acesso direto revogado.
- A chave secreta do Supabase nunca entra neste repositório; só a chave pública (`sb_publishable_…`).
