// Gerado por tools/build.mjs — não editar à mão.
const PARTS = [{"n":1,"pt":"Fundamentos","en":"Fundamentals"},{"n":2,"pt":"Os verbos To Be e There Be","en":"To Be and There Be"},{"n":3,"pt":"O presente","en":"The present"},{"n":4,"pt":"O passado","en":"The past"},{"n":5,"pt":"O Present Perfect","en":"The Present Perfect"},{"n":6,"pt":"O futuro","en":"The future"},{"n":7,"pt":"Verbos modais","en":"Modal verbs"},{"n":8,"pt":"Adjetivos, advérbios e comparações","en":"Adjectives, adverbs and comparisons"},{"n":9,"pt":"Quantificadores","en":"Quantifiers"},{"n":10,"pt":"Preposições","en":"Prepositions"},{"n":11,"pt":"Padrões verbais e verbos versáteis","en":"Verb patterns and versatile verbs"},{"n":12,"pt":"Voz passiva","en":"The passive voice"},{"n":13,"pt":"Condicionais, desejos e arrependimentos","en":"Conditionals, wishes and regrets"},{"n":14,"pt":"Frases complexas","en":"Complex sentences"},{"n":15,"pt":"Escrita","en":"Writing"}];
const FIELDS = [{"id":"medicina","pt":"Medicina","en":"Medicine","icon":"🩺","color":"#e4f1ee","subs":[{"id":"medicina-de-familia","pt":"Medicina de Família","en":"Family Medicine"}]},{"id":"advocacia","pt":"Advocacia","en":"Law","icon":"⚖️","color":"#efe9f7","subs":[]},{"id":"ti","pt":"TI","en":"IT","icon":"💻","color":"#e3edf9","subs":[]},{"id":"marketing","pt":"Marketing","en":"Marketing","icon":"📣","color":"#fbe9e4","subs":[]},{"id":"empreendedorismo","pt":"Empreendedorismo","en":"Entrepreneurship","icon":"🚀","color":"#fdf3d8","subs":[]}];
const CATALOG = [
 {
  "id": "capital-letters",
  "title": "Capital Letters",
  "area": "Inglês Cotidiano",
  "icon": "🔠",
  "color": "#e8eefb",
  "level": "A1",
  "part": 1,
  "order": 2,
  "tags": [
   "capital letters",
   "countries and nationalities",
   "days and months",
   "travel"
  ],
  "v": "8366f094",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 15
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 15
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 12
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 19
   }
  ]
 },
 {
  "id": "numbers",
  "title": "Numbers",
  "area": "Inglês Cotidiano",
  "icon": "🔢",
  "color": "#fdf1dc",
  "level": "A1",
  "part": 1,
  "order": 3,
  "tags": [
   "numbers",
   "prices",
   "years",
   "dates",
   "ordinal numbers",
   "math",
   "market",
   "birthdays"
  ],
  "v": "7a010ac5",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 12
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 12
   }
  ]
 },
 {
  "id": "nouns",
  "title": "Nouns",
  "area": "Inglês Cotidiano",
  "icon": "🍎",
  "color": "#eef6e4",
  "level": "A1",
  "part": 1,
  "order": 4,
  "tags": [
   "nouns",
   "plural",
   "irregular plurals",
   "countable",
   "uncountable",
   "generic plural",
   "market",
   "home"
  ],
  "v": "58cca833",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 12
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 14
   }
  ]
 },
 {
  "id": "articles",
  "title": "Articles",
  "area": "Inglês Cotidiano",
  "icon": "🏙️",
  "color": "#e6f0fa",
  "level": "A1",
  "part": 1,
  "order": 5,
  "tags": [
   "articles",
   "a",
   "an",
   "the",
   "no article",
   "city",
   "neighborhood",
   "directions"
  ],
  "v": "95d2b7e8",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 16
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 15
   }
  ]
 },
 {
  "id": "pronouns",
  "title": "Personal Pronouns and Possessives",
  "area": "Inglês Cotidiano",
  "icon": "👨‍👩‍👧",
  "color": "#fbe9ec",
  "level": "A1",
  "part": 1,
  "order": 6,
  "tags": [
   "pronouns",
   "subject",
   "object",
   "possessive adjectives",
   "its",
   "it's",
   "family"
  ],
  "v": "030ad75e",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 13
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 14
   }
  ]
 },
 {
  "id": "possessive-s",
  "title": "Possessive 's",
  "area": "Inglês Cotidiano",
  "icon": "🌳",
  "color": "#f1ecdf",
  "level": "A1",
  "part": 1,
  "order": 7,
  "tags": [
   "possessive 's",
   "apostrophe",
   "of",
   "family tree",
   "belongings"
  ],
  "v": "f3544c1f",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 12
   }
  ]
 },
 {
  "id": "demonstratives",
  "title": "This, That, These, Those",
  "area": "Inglês Cotidiano",
  "icon": "🛍️",
  "color": "#f6e7f2",
  "level": "A1",
  "part": 1,
  "order": 8,
  "tags": [
   "demonstratives",
   "this",
   "that",
   "these",
   "those",
   "one",
   "shopping"
  ],
  "v": "fc7a0481",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 12
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "reflexives",
  "title": "Reflexive and Possessive Pronouns",
  "area": "Inglês Cotidiano",
  "icon": "🎸",
  "color": "#e9f1f8",
  "level": "B1",
  "part": 1,
  "order": 9,
  "tags": [
   "reflexive pronouns",
   "myself",
   "by myself",
   "each other",
   "possessive pronouns",
   "mine",
   "hobbies"
  ],
  "v": "e881a551",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 13
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 13
   }
  ]
 },
 {
  "id": "whose",
  "title": "Whose",
  "area": "Inglês Cotidiano",
  "icon": "🧳",
  "color": "#eaf2ea",
  "level": "A2",
  "part": 1,
  "order": 10,
  "tags": [
   "whose",
   "who's",
   "whom",
   "possessive",
   "relative clauses",
   "lost and found",
   "family"
  ],
  "v": "817d3f0c",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 12
   }
  ]
 },
 {
  "id": "question-words",
  "title": "Question Words",
  "area": "Inglês Cotidiano",
  "icon": "❓",
  "color": "#fdf3e1",
  "level": "A1",
  "part": 1,
  "order": 11,
  "tags": [
   "question words",
   "wh-questions",
   "what",
   "which",
   "how",
   "word order",
   "subject questions",
   "meeting people"
  ],
  "v": "28cbb9d9",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 12
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "to-be",
  "title": "The Verb To Be",
  "area": "Inglês Cotidiano",
  "icon": "🙋",
  "color": "#e8f3ef",
  "level": "A1",
  "part": 2,
  "order": 12,
  "tags": [
   "to be",
   "am",
   "is",
   "are",
   "short answers",
   "age",
   "introductions",
   "family"
  ],
  "v": "35dcb0b8",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 14
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 12
   }
  ]
 },
 {
  "id": "to-be-past",
  "title": "To Be in the Past",
  "area": "Inglês Cotidiano",
  "icon": "🕰️",
  "color": "#f3ece2",
  "level": "A1",
  "part": 2,
  "order": 13,
  "tags": [
   "was",
   "were",
   "be born",
   "past",
   "will be",
   "last weekend",
   "memories"
  ],
  "v": "1e7731e8",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 16
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 16
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 15
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 15
   }
  ]
 },
 {
  "id": "there-be-have",
  "title": "There Be vs. Have",
  "area": "medicina",
  "sub": "medicina-de-familia",
  "icon": "🩺",
  "color": "#e4f1ee",
  "level": "B2",
  "part": 2,
  "order": 14,
  "tags": [],
  "v": "617159e3",
  "exercises": [
   {
    "id": "mc",
    "type": "mc",
    "n": 20
   },
   {
    "id": "dialogue",
    "type": "gap",
    "n": 26
   }
  ]
 },
 {
  "id": "phrasal-verbs",
  "title": "Phrasal Verbs — Particles",
  "area": "Inglês Cotidiano",
  "icon": "↕️",
  "color": "#fdf0dc",
  "level": "B1",
  "part": 11,
  "order": 59,
  "tags": [],
  "v": "25f4f676",
  "exercises": [
   {
    "id": "p1",
    "type": "gap",
    "n": 10
   },
   {
    "id": "p2",
    "type": "gap",
    "n": 10
   },
   {
    "id": "p3",
    "type": "gap",
    "n": 10
   },
   {
    "id": "p4",
    "type": "gap",
    "n": 14
   }
  ]
 }
];
