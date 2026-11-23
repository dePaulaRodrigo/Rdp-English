/* Conteúdo curado em inglês: só links para as páginas oficiais (nada hospedado aqui).
   Para acrescentar um item: copie uma linha de "items" e troque nome, endereço, nível e nota.
   Níveis: A1–A2 (básico), B1–B2 (intermediário), C1 (avançado). */
const CURATED_UPDATED = "23/11/2026";
const CURATED = [
  { id:"learners", icon:"🌱", title:"Feito para quem está aprendendo",
    intro:"Textos e áudios em inglês mais lento e com vocabulário controlado. O melhor ponto de partida.",
    how:"Leia ou ouça uma matéria por dia. Na primeira vez, sem legenda; na segunda, acompanhando o texto. Anote só as palavras que aparecerem mais de uma vez.",
    items:[
      { name:"VOA Learning English", url:"https://learningenglish.voanews.com/", level:"A2–B1", note:"Notícias e reportagens em inglês americano lento, com o texto completo de cada áudio." },
      { name:"News in Levels", url:"https://www.newsinlevels.com/", level:"A1–B1", note:"A mesma notícia escrita em três níveis de dificuldade." },
      { name:"Breaking News English", url:"https://breakingnewsenglish.com/", level:"A1–B2", note:"Notícias curtas em vários níveis, com áudio e exercícios." },
      { name:"Rachel's English", url:"https://www.youtube.com/@rachelsenglish", level:"A2–C1", note:"Pronúncia do inglês americano, com explicações sobre ritmo, ligação e redução de sons." }
    ]},
  { id:"podcasts", icon:"🎧", title:"Podcasts",
    intro:"Para treinar o ouvido no trajeto, na academia ou lavando a louça.",
    how:"Escolha um tema de que você goste. Ouça o mesmo episódio duas vezes: a primeira para entender a ideia geral, a segunda para pegar detalhes. Muitos têm transcrição no site.",
    items:[
      { name:"Short Wave (NPR)", url:"https://www.npr.org/podcasts-and-shows", level:"B1–B2", note:"Ciência em episódios de uns 15 minutos. Procure o programa no diretório da NPR." },
      { name:"Planet Money (NPR)", url:"https://www.npr.org/sections/money/", level:"B2–C1", note:"Economia explicada com histórias. Ótimo para vocabulário de negócios." },
      { name:"Hidden Brain", url:"https://hiddenbrain.org/", level:"B2–C1", note:"Psicologia e comportamento humano, com um narrador de fala clara." },
      { name:"99% Invisible", url:"https://99percentinvisible.org/", level:"B2–C1", note:"As histórias por trás de objetos, prédios e cidades." },
      { name:"Radiolab", url:"https://radiolab.org/", level:"C1", note:"Ciência e filosofia com edição de som caprichada. Mais rápido e mais denso." },
      { name:"This American Life", url:"https://www.thisamericanlife.org/", level:"C1", note:"Histórias reais da vida americana. Inglês natural, com transcrições no site." }
    ]},
  { id:"video", icon:"📺", title:"Vídeos e canais",
    intro:"Vídeos curtos com imagens que ajudam a entender. Ative as legendas em inglês, não em português.",
    how:"Assista uma vez com legenda em inglês e outra sem. Pause e repita em voz alta as frases que achar úteis.",
    items:[
      { name:"TED-Ed", url:"https://www.youtube.com/@TEDEd", level:"B1–B2", note:"Aulas animadas de 5 minutos sobre história, ciência e literatura." },
      { name:"TED Talks", url:"https://www.ted.com/talks", level:"B1–C1", note:"Palestras com transcrição e legendas. Dá para filtrar por tema e duração." },
      { name:"Kurzgesagt", url:"https://www.youtube.com/@kurzgesagt", level:"B2", note:"Ciência e espaço em animações. Fala rápida, mas muito clara." },
      { name:"Crash Course", url:"https://www.youtube.com/@crashcourse", level:"B2–C1", note:"Cursos completos de história, biologia, economia e mais, em episódios curtos." },
      { name:"Veritasium", url:"https://www.youtube.com/@veritasium", level:"B2–C1", note:"Física e engenharia com experimentos." },
      { name:"Khan Academy", url:"https://www.khanacademy.org/", level:"B1–C1", note:"Aulas de quase tudo, em inglês americano didático e pausado." }
    ]},
  { id:"reading", icon:"📚", title:"Livros e leitura",
    intro:"Clássicos em domínio público, gratuitos e legais, além de audiolivros gravados por voluntários.",
    how:"Comece por contos e livros curtos. Leia com o audiolivro ao mesmo tempo: você aprende a pronúncia junto com a escrita.",
    items:[
      { name:"Project Gutenberg", url:"https://www.gutenberg.org/", level:"B2–C1", note:"Mais de 70 mil livros em domínio público. Sugestões: Sherlock Holmes, de Conan Doyle, e os contos de Edgar Allan Poe." },
      { name:"Standard Ebooks", url:"https://standardebooks.org/", level:"B2–C1", note:"Clássicos em domínio público com edição e formatação cuidadosas." },
      { name:"LibriVox", url:"https://librivox.org/", level:"B1–C1", note:"Audiolivros gratuitos de obras em domínio público, lidos por voluntários." }
    ]},
  { id:"news", icon:"📰", title:"Notícias e ciência",
    intro:"Para quem já lê com alguma facilidade e quer conteúdo do dia a dia.",
    how:"Leia o título e o primeiro parágrafo e tente prever o resto. Depois confira. Não traduza palavra por palavra.",
    items:[
      { name:"AP News", url:"https://apnews.com/", level:"B2–C1", note:"Agência de notícias com texto direto e objetivo, bom modelo de inglês escrito." },
      { name:"NPR", url:"https://www.npr.org/", level:"B2–C1", note:"Rádio pública americana. Muitas matérias têm áudio e texto." },
      { name:"NASA", url:"https://www.nasa.gov/", level:"B1–C1", note:"Notícias, fotos e vídeos sobre o espaço." },
      { name:"Smithsonian Magazine", url:"https://www.smithsonianmag.com/", level:"B2–C1", note:"História, ciência, arte e curiosidades." }
    ]},
  { id:"tools", icon:"🧰", title:"Ferramentas",
    intro:"Dicionários e sites de pronúncia para consultar enquanto você lê, ouve ou faz os exercícios.",
    how:"Prefira dicionários inglês–inglês: eles ensinam a palavra com exemplos de uso. Para pronúncia, ouça a palavra em várias frases diferentes.",
    items:[
      { name:"Merriam-Webster", url:"https://www.merriam-webster.com/", level:"B1–C1", note:"O dicionário americano de referência, com pronúncia em áudio." },
      { name:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/", level:"A2–C1", note:"Definições simples, pronúncia americana e britânica, e tradução para o português." },
      { name:"Longman Dictionary", url:"https://www.ldoceonline.com/", level:"A2–C1", note:"Definições com vocabulário controlado e muitos exemplos." },
      { name:"YouGlish", url:"https://youglish.com/", level:"A2–C1", note:"Digite uma palavra e ouça como ela é dita em vídeos reais do YouTube." },
      { name:"Forvo", url:"https://forvo.com/", level:"A1–C1", note:"Pronúncia de palavras gravada por falantes nativos." }
    ]},
  { id:"watch", icon:"🎬", title:"Séries e filmes",
    intro:"Sugestões em inglês americano. Os serviços de streaming mudam o catálogo, então aqui vão só os nomes.",
    how:"Prefira séries a filmes: os episódios são curtos e os personagens repetem o vocabulário. Use legenda em inglês e reveja cenas de que gostou.",
    items:[
      { name:"Friends", level:"B1", note:"Comédia dos anos 90, com diálogos do dia a dia e muitas expressões que continuam em uso." },
      { name:"Modern Family", level:"B1–B2", note:"Três famílias, várias idades e sotaques. Episódios de 20 minutos." },
      { name:"The Office (EUA)", level:"B2", note:"Humor de escritório. Ótima para inglês de trabalho." },
      { name:"Brooklyn Nine-Nine", level:"B2", note:"Comédia policial com piadas rápidas e muita gíria." },
      { name:"Documentários de natureza", level:"B1–B2", note:"Narração clara e pausada, com vocabulário de ciência." }
    ]}
];
