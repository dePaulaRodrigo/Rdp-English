# Lições

Cada lição é um arquivo `lessons/<id>.js` com `addLesson({...})`. O nome do arquivo é igual ao `id`.
O site só baixa o arquivo de uma lição quando o aluno a abre.

Depois de criar ou alterar uma lição, rode:

    node tools/build.mjs

O script confere erros (lacuna sem resposta, resposta fora das opções, falta de explicação etc.) e
gera `lessons/catalog.js`, que é o índice usado na tela inicial. Sem esse passo a lição não aparece.

## Campos da lição
- `id`, `title`, `area` (ex.: "Inglês Cotidiano", "Medicina de Família"), `level` (CEFR), `icon`, `color`
- `order` (opcional): posição na lista; menor aparece antes. Use o número do tópico no ebook.
- `tags` (opcional): ex. `["future simple", "planning a trip"]`
- `explanation`: HTML da aba Explicação
- `vocab` (opcional): HTML da aba Vocabulário
- `exercises`: lista de exercícios

## Textos bilíngues
`explanation`, `vocab`, `instructions`, `scene`, `title` e cada `why` aceitam texto simples ou `{pt:"...", en:"..."}`.
Se a explicação for bilíngue, aparece o botão EN | PT. Idioma padrão: português no A1–A2, inglês do B1 em diante;
a escolha do aluno fica guardada no código dele.

## Padrão "Inglês Cotidiano"
Quatro exercícios, ids fixos: `mc-easy`, `mc-hard`, `dialogue-medium`, `dialogue-hard`.

## Tipos de exercício
- `type:"mc"`: `items:[{q:"frase com ___", o:[opções], a:índice certo, why:"explicação", sub:"subponto"}]`
- `type:"gap"`, `layout:"dialogue"` (`lines:[["Fala", "texto com [[1]]"]]`) ou `layout:"list"` (`lines:["texto com [[1]]"]`)
  - `answers:{1:["resposta principal","alternativa aceita"]}`, `why:{1:"..."}`
  - `bank` (opcional): lista fixa de opções, permite incluir distratores. Sem ela, o banco são as respostas principais.
  - `sub` (opcional): `{1:"subponto"}`
  - `caseSensitive:true` (opcional): maiúsculas e minúsculas contam na correção (ex.: lição de Capital Letters).

`sub` marca o subponto gramatical testado em cada item. Assim a versão ESP do mesmo tópico pode cobrir os mesmos subpontos.

**Não mude o `id` de uma lição ou de um exercício depois de publicado**: o progresso dos alunos fica guardado por esses ids.
