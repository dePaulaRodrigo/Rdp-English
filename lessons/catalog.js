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
  "id": "there-be",
  "title": "There Be",
  "area": "Inglês Cotidiano",
  "icon": "🏠",
  "color": "#eef0fb",
  "level": "A1",
  "part": 2,
  "order": 14,
  "tags": [
   "there is",
   "there are",
   "there was",
   "there were",
   "there be vs have",
   "home",
   "neighborhood",
   "city"
  ],
  "v": "8f26576f",
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
  "id": "exist-be-a-thing",
  "title": "Exist × There Be × Be a Thing",
  "area": "Inglês Cotidiano",
  "icon": "🌍",
  "color": "#e5f2f6",
  "level": "B1",
  "part": 2,
  "order": 15,
  "tags": [
   "exist",
   "there be",
   "be a thing",
   "such a thing",
   "existence",
   "customs",
   "curiosities"
  ],
  "v": "d319947d",
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
    "n": 11
   }
  ]
 },
 {
  "id": "present-simple",
  "title": "Present Simple",
  "area": "Inglês Cotidiano",
  "icon": "🚇",
  "color": "#e7eefa",
  "level": "A1",
  "part": 3,
  "order": 16,
  "tags": [
   "present simple",
   "do",
   "does",
   "third person -s",
   "frequency adverbs",
   "routine",
   "commute"
  ],
  "v": "49338172",
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
    "n": 15
   }
  ]
 },
 {
  "id": "present-continuous",
  "title": "Present Continuous",
  "area": "Inglês Cotidiano",
  "icon": "⏳",
  "color": "#f7ede4",
  "level": "A1",
  "part": 3,
  "order": 17,
  "tags": [
   "present continuous",
   "-ing",
   "spelling",
   "stative verbs",
   "present simple vs continuous",
   "right now",
   "home"
  ],
  "v": "f1ef44fc",
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
  "id": "have-expressions",
  "title": "Expressions with HAVE and TAKE",
  "area": "Inglês Cotidiano",
  "icon": "🍽️",
  "color": "#fbeee6",
  "level": "A2",
  "part": 3,
  "order": 18,
  "tags": [
   "have",
   "take",
   "have someone over",
   "it takes",
   "meals",
   "guests",
   "restaurant"
  ],
  "v": "e6fd3619",
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
  "id": "have-got",
  "title": "Have × Have Got",
  "area": "Inglês Cotidiano",
  "icon": "🔑",
  "color": "#eef3e6",
  "level": "A2",
  "part": 3,
  "order": 19,
  "tags": [
   "have",
   "have got",
   "got",
   "gotten",
   "gotta",
   "family",
   "belongings"
  ],
  "v": "049bc10d",
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
    "n": 13
   }
  ]
 },
 {
  "id": "past-simple",
  "title": "Past Simple",
  "area": "Inglês Cotidiano",
  "icon": "🧳",
  "color": "#f4ecf8",
  "level": "A2",
  "part": 4,
  "order": 20,
  "tags": [
   "past simple",
   "regular verbs",
   "irregular verbs",
   "-ed pronunciation",
   "did",
   "a past trip",
   "travel"
  ],
  "v": "59bd13b0",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
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
  "id": "past-continuous",
  "title": "Past Continuous",
  "area": "Inglês Cotidiano",
  "icon": "🌧️",
  "color": "#e6eef4",
  "level": "A2",
  "part": 4,
  "order": 21,
  "tags": [
   "past continuous",
   "was",
   "were",
   "-ing",
   "when",
   "while",
   "interrupted actions",
   "commute"
  ],
  "v": "ed46e7cb",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "used-to",
  "title": "Used To",
  "area": "Inglês Cotidiano",
  "icon": "🪀",
  "color": "#f8efe0",
  "level": "A2",
  "part": 4,
  "order": 22,
  "tags": [
   "used to",
   "would",
   "usually",
   "anymore",
   "no longer",
   "childhood",
   "nostalgia"
  ],
  "v": "13b4e6c6",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "be-used-to",
  "title": "Be Used To and Get Used To",
  "area": "Inglês Cotidiano",
  "icon": "🧭",
  "color": "#e8f2ec",
  "level": "B2",
  "part": 4,
  "order": 23,
  "tags": [
   "be used to",
   "get used to",
   "used to",
   "-ing after prepositions",
   "moving abroad",
   "adaptation"
  ],
  "v": "68c9f410",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "past-perfect",
  "title": "Past Perfect",
  "area": "Inglês Cotidiano",
  "icon": "🛫",
  "color": "#f1eaf6",
  "level": "B1",
  "part": 4,
  "order": 24,
  "tags": [
   "past perfect",
   "had + past participle",
   "by the time",
   "already",
   "'d had or would",
   "travel problems"
  ],
  "v": "d3c8feae",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "present-perfect",
  "title": "Present Perfect",
  "area": "Inglês Cotidiano",
  "icon": "🌏",
  "color": "#e5f0f5",
  "level": "A2",
  "part": 5,
  "order": 25,
  "tags": [
   "present perfect",
   "have + past participle",
   "ever",
   "never",
   "already",
   "yet",
   "just",
   "been vs gone",
   "life experiences",
   "travel"
  ],
  "v": "1491e701",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 13
   }
  ]
 },
 {
  "id": "for-since-ago",
  "title": "For, Since, Ago",
  "area": "Inglês Cotidiano",
  "icon": "📅",
  "color": "#fbefe3",
  "level": "A2",
  "part": 5,
  "order": 26,
  "tags": [
   "for",
   "since",
   "ago",
   "how long",
   "it's been",
   "present perfect",
   "family",
   "work"
  ],
  "v": "ca4b6164",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "present-perfect-continuous",
  "title": "Present Perfect Continuous",
  "area": "Inglês Cotidiano",
  "icon": "🎹",
  "color": "#eef1fa",
  "level": "B1",
  "part": 5,
  "order": 27,
  "tags": [
   "present perfect continuous",
   "have been + -ing",
   "duration",
   "lately",
   "how long",
   "hobbies",
   "projects"
  ],
  "v": "8db824e0",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "will",
  "title": "Future Simple (Will)",
  "area": "Inglês Cotidiano",
  "icon": "🔮",
  "color": "#efe9f8",
  "level": "A2",
  "part": 6,
  "order": 28,
  "tags": [
   "will",
   "won't",
   "predictions",
   "promises",
   "offers",
   "time clauses",
   "restaurant"
  ],
  "v": "ce650cb0",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "going-to",
  "title": "Going To and Present Continuous for the Future",
  "area": "Inglês Cotidiano",
  "icon": "🗓️",
  "color": "#e7f3ef",
  "level": "A2",
  "part": 6,
  "order": 29,
  "tags": [
   "going to",
   "gonna",
   "present continuous for future",
   "was going to",
   "be about to",
   "will vs going to",
   "plans",
   "vacation"
  ],
  "v": "8add8437",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "future-continuous",
  "title": "Future Continuous and Future Perfect",
  "area": "Inglês Cotidiano",
  "icon": "✈️",
  "color": "#e8eef8",
  "level": "B1",
  "part": 6,
  "order": 30,
  "tags": [
   "future continuous",
   "will be + -ing",
   "future perfect",
   "will have",
   "this time next week",
   "polite questions",
   "planning a trip"
  ],
  "v": "0f69cd06",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "can",
  "title": "Can",
  "area": "Inglês Cotidiano",
  "icon": "🏊",
  "color": "#e4f3f1",
  "level": "A1",
  "part": 7,
  "order": 31,
  "tags": [
   "can",
   "can't",
   "ability",
   "permission",
   "requests",
   "can see",
   "skills",
   "hobbies"
  ],
  "v": "212b828c",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "could",
  "title": "Could",
  "area": "Inglês Cotidiano",
  "icon": "🛎️",
  "color": "#f3efe6",
  "level": "A2",
  "part": 7,
  "order": 32,
  "tags": [
   "could",
   "couldn't",
   "past ability",
   "polite requests",
   "suggestions",
   "possibility",
   "was able to",
   "childhood",
   "hotel"
  ],
  "v": "12c9f286",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "be-able-to",
  "title": "Can × Be Able To",
  "area": "Inglês Cotidiano",
  "icon": "🎯",
  "color": "#eaf3e8",
  "level": "B1",
  "part": 7,
  "order": 33,
  "tags": [
   "be able to",
   "can",
   "could",
   "managed to",
   "was able to",
   "personal goals"
  ],
  "v": "e54237ca",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "have-to-must",
  "title": "Have To, Need, Must",
  "area": "Inglês Cotidiano",
  "icon": "🛂",
  "color": "#f4ece6",
  "level": "A2",
  "part": 7,
  "order": 34,
  "tags": [
   "have to",
   "must",
   "need to",
   "don't have to",
   "mustn't",
   "had to",
   "obligation",
   "travel rules"
  ],
  "v": "36ff5eb8",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 11
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "modal-verbs",
  "title": "Modal Verbs: Advice and Possibility",
  "area": "Inglês Cotidiano",
  "icon": "🗺️",
  "color": "#e6f1ec",
  "level": "A2",
  "part": 7,
  "order": 35,
  "tags": [
   "modal verbs",
   "should",
   "may",
   "might",
   "must",
   "had better",
   "ought to",
   "deduction",
   "advice",
   "planning a trip"
  ],
  "v": "a8b7d8d8",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "modals-perfect",
  "title": "Modals + Present Perfect",
  "area": "Inglês Cotidiano",
  "icon": "🔍",
  "color": "#ece8f4",
  "level": "B2",
  "part": 7,
  "order": 36,
  "tags": [
   "should have",
   "must have",
   "might have",
   "could have",
   "can't have",
   "didn't need to",
   "needn't have",
   "past deduction",
   "regrets"
  ],
  "v": "e4bfca98",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 7
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "adjectives",
  "title": "Adjectives",
  "area": "Inglês Cotidiano",
  "icon": "🏡",
  "color": "#f2efe3",
  "level": "A1",
  "part": 8,
  "order": 37,
  "tags": [
   "adjectives",
   "adjective order",
   "something interesting",
   "one / ones",
   "the rich",
   "nationalities",
   "-ish",
   "describing home and city"
  ],
  "v": "9d5b19bb",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 7
   }
  ]
 },
 {
  "id": "adverbs",
  "title": "Adverbs",
  "area": "Inglês Cotidiano",
  "icon": "🏃",
  "color": "#e6eef4",
  "level": "A2",
  "part": 8,
  "order": 38,
  "tags": [
   "adverbs",
   "-ly",
   "well",
   "fast",
   "hard",
   "hardly",
   "lately",
   "adverb position",
   "pretty",
   "hobbies and sports"
  ],
  "v": "2ddcba85",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "adjective-or-adverb",
  "title": "Adjective or Adverb?",
  "area": "Inglês Cotidiano",
  "icon": "⭐",
  "color": "#f4efe2",
  "level": "B1",
  "part": 8,
  "order": 39,
  "tags": [
   "adjective vs adverb",
   "linking verbs",
   "tastes good",
   "feel bad",
   "I'm well",
   "word families",
   "suffixes",
   "reviews"
  ],
  "v": "fb9730b2",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "ed-ing-adjectives",
  "title": "-ED and -ING Adjectives",
  "area": "Inglês Cotidiano",
  "icon": "🎬",
  "color": "#f4e6e9",
  "level": "B1",
  "part": 8,
  "order": 40,
  "tags": [
   "-ed adjectives",
   "-ing adjectives",
   "bored vs boring",
   "interested in",
   "excited about",
   "tired of",
   "pronunciation of -ed",
   "movies books music"
  ],
  "v": "97bf245b",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 8
   }
  ]
 },
 {
  "id": "comparatives",
  "title": "Comparatives and Superlatives",
  "area": "Inglês Cotidiano",
  "icon": "🌎",
  "color": "#e3eef0",
  "level": "A2",
  "part": 8,
  "order": 41,
  "tags": [
   "comparatives",
   "superlatives",
   "-er",
   "more",
   "the most",
   "better",
   "worse",
   "as … as",
   "less",
   "fewer",
   "countries and cities"
  ],
  "v": "aca9262d",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "the-more-the-better",
  "title": "The More…, The Better",
  "area": "Inglês Cotidiano",
  "icon": "📚",
  "color": "#eae6f4",
  "level": "B2",
  "part": 8,
  "order": 42,
  "tags": [
   "the more the better",
   "double comparative",
   "the sooner the better",
   "the more the merrier",
   "word order",
   "habits and study"
  ],
  "v": "6481a54a",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 7
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 7
   }
  ]
 },
 {
  "id": "so-such",
  "title": "So, Such, Very, Too",
  "area": "Inglês Cotidiano",
  "icon": "✨",
  "color": "#f4f0e1",
  "level": "B1",
  "part": 8,
  "order": 43,
  "tags": [
   "so",
   "such",
   "very",
   "too",
   "so much",
   "so many",
   "such a",
   "so … that",
   "too … to",
   "such as",
   "memorable trip"
  ],
  "v": "227817db",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 8
   }
  ]
 },
 {
  "id": "enough",
  "title": "Enough",
  "area": "Inglês Cotidiano",
  "icon": "💰",
  "color": "#e8f1e4",
  "level": "A2",
  "part": 8,
  "order": 44,
  "tags": [
   "enough",
   "enough money",
   "old enough",
   "too",
   "not enough",
   "enough to",
   "enough for",
   "that's enough",
   "fair enough",
   "money and time for a trip"
  ],
  "v": "e6d9ad26",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "compounds",
  "title": "Compound Nouns and Adjectives",
  "area": "Inglês Cotidiano",
  "icon": "🚏",
  "color": "#e9eef2",
  "level": "B1",
  "part": 8,
  "order": 45,
  "tags": [
   "compound nouns",
   "compound adjectives",
   "bus stop",
   "living room",
   "two-hour drive",
   "well-known",
   "mother-in-law",
   "log in vs login",
   "house and city"
  ],
  "v": "6b14e7be",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 8
   }
  ]
 },
 {
  "id": "many-much",
  "title": "Many, Much, A Lot Of",
  "area": "Inglês Cotidiano",
  "icon": "🛒",
  "color": "#eef3e2",
  "level": "A1",
  "part": 9,
  "order": 46,
  "tags": [
   "many",
   "much",
   "a lot of",
   "how much",
   "how many",
   "countable",
   "uncountable",
   "a piece of",
   "advice",
   "news",
   "at the supermarket"
  ],
  "v": "a4d63b29",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "some-any-few-little",
  "title": "Few, Little, Some, Any, No",
  "area": "Inglês Cotidiano",
  "icon": "🥫",
  "color": "#f3ebe0",
  "level": "A2",
  "part": 9,
  "order": 47,
  "tags": [
   "a few",
   "a little",
   "few",
   "little",
   "some",
   "any",
   "no",
   "none",
   "something",
   "anything",
   "nothing",
   "nobody",
   "double negative",
   "kitchen and pantry"
  ],
  "v": "b1418572",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "either-neither-both",
  "title": "Either, Neither, Both",
  "area": "Inglês Cotidiano",
  "icon": "⚖️",
  "color": "#e8ecf4",
  "level": "B1",
  "part": 9,
  "order": 48,
  "tags": [
   "either",
   "neither",
   "both",
   "either … or",
   "neither … nor",
   "both … and",
   "me neither",
   "so do I",
   "neither do I",
   "either at the end",
   "choosing a restaurant or hotel"
  ],
  "v": "5ebc39fb",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "every-each-all",
  "title": "Every, Each, All, Whole",
  "area": "Inglês Cotidiano",
  "icon": "👨‍👩‍👧",
  "color": "#f2e8ee",
  "level": "B1",
  "part": 9,
  "order": 49,
  "tags": [
   "every",
   "each",
   "all",
   "whole",
   "every day vs all day",
   "everyone is",
   "every other day",
   "all of us",
   "the whole",
   "everything",
   "family routine"
  ],
  "v": "7703e12c",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "in-on-at-time",
  "title": "In, On, At (Time)",
  "area": "Inglês Cotidiano",
  "icon": "📅",
  "color": "#e6eef6",
  "level": "A1",
  "part": 10,
  "order": 50,
  "tags": [
   "in on at",
   "prepositions of time",
   "next Monday",
   "on the weekend",
   "at night",
   "by vs until",
   "on time vs in time",
   "schedules and birthdays"
  ],
  "v": "0c088c1d",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "prepositions-place",
  "title": "Prepositions of Place and Movement",
  "area": "Inglês Cotidiano",
  "icon": "🧭",
  "color": "#eaf2e8",
  "level": "A2",
  "part": 10,
  "order": 51,
  "tags": [
   "in on at",
   "place",
   "address",
   "arrive in vs arrive at",
   "go home",
   "by car",
   "get on the bus",
   "next to",
   "across from",
   "through",
   "to vs for",
   "directions"
  ],
  "v": "ffad7321",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 11
   }
  ]
 },
 {
  "id": "like",
  "title": "Like, Look Like, As",
  "area": "Inglês Cotidiano",
  "icon": "🪞",
  "color": "#f4ebe6",
  "level": "B1",
  "part": 10,
  "order": 52,
  "tags": [
   "like",
   "look like",
   "look alike",
   "what is he like",
   "seem",
   "sounds like",
   "feel like",
   "like vs as",
   "unlike",
   "likely",
   "family resemblance"
  ],
  "v": "3f661c3a",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "verb-patterns",
  "title": "Verb Patterns: To or -ING?",
  "area": "Inglês Cotidiano",
  "icon": "🎨",
  "color": "#f1e9f4",
  "level": "A2",
  "part": 11,
  "order": 53,
  "tags": [
   "verb patterns",
   "want to",
   "enjoy -ing",
   "like to / like -ing",
   "would like to",
   "let",
   "make",
   "decided not to",
   "to = para",
   "hobbies"
  ],
  "v": "030822c7",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 10
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "verb-patterns-meaning",
  "title": "Verbs That Change Meaning: Stop, Remember, Try",
  "area": "Inglês Cotidiano",
  "icon": "🧠",
  "color": "#e6ecf2",
  "level": "B2",
  "part": 11,
  "order": 54,
  "tags": [
   "stop doing vs stop to do",
   "remember to vs remember -ing",
   "forget",
   "try to vs try -ing",
   "regret",
   "go on",
   "mean",
   "want someone to",
   "see him cross / crossing",
   "habits and memories"
  ],
  "v": "20e57d3d",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "ing-after-prepositions",
  "title": "-ING After Prepositions",
  "area": "Inglês Cotidiano",
  "icon": "🎯",
  "color": "#f2efe4",
  "level": "B1",
  "part": 11,
  "order": 55,
  "tags": [
   "-ing after prepositions",
   "interested in learning",
   "look forward to seeing",
   "instead of",
   "without saying",
   "by doing",
   "to as a preposition",
   "-ing as subject",
   "interests and plans"
  ],
  "v": "b1c20249",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 8
   }
  ]
 },
 {
  "id": "get",
  "title": "The Many Meanings of GET",
  "area": "Inglês Cotidiano",
  "icon": "🔄",
  "color": "#e4eef0",
  "level": "A2",
  "part": 11,
  "order": 56,
  "tags": [
   "get",
   "get vs stay vs be",
   "get tired",
   "get home",
   "get to",
   "get on the bus",
   "get up",
   "get along",
   "gotten",
   "it's getting late",
   "commute"
  ],
  "v": "a474f832",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "make-let-allow",
  "title": "Make, Let, Allow (and Make × Do)",
  "area": "Inglês Cotidiano",
  "icon": "🚸",
  "color": "#f4ede4",
  "level": "B1",
  "part": 11,
  "order": 57,
  "tags": [
   "make",
   "let",
   "allow",
   "be allowed to",
   "was made to",
   "let's vs let us",
   "make vs do",
   "make a mistake",
   "do homework",
   "childhood rules"
  ],
  "v": "94ca5061",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "causative",
  "title": "Causative: Have / Get Something Done",
  "area": "Inglês Cotidiano",
  "icon": "💇",
  "color": "#ece6f2",
  "level": "B2",
  "part": 11,
  "order": 58,
  "tags": [
   "causative",
   "have something done",
   "get something done",
   "had my hair cut",
   "had my wallet stolen",
   "have someone do",
   "get someone to do",
   "services"
  ],
  "v": "6b47e5aa",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 7
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 7
   }
  ]
 },
 {
  "id": "phrasal-verbs",
  "title": "Phrasal Verbs",
  "area": "Inglês Cotidiano",
  "icon": "↕️",
  "color": "#fdf0dc",
  "level": "B1",
  "part": 11,
  "order": 59,
  "tags": [
   "phrasal verbs",
   "particles",
   "separable",
   "turn it off",
   "look for",
   "run out of",
   "come up with",
   "take off",
   "pick up",
   "find out vs discover",
   "everyday life"
  ],
  "v": "d7bf4a59",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 9
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 10
   }
  ]
 },
 {
  "id": "passive-voice",
  "title": "The Passive Voice",
  "area": "Inglês Cotidiano",
  "icon": "🏗️",
  "color": "#ebeef2",
  "level": "B1",
  "part": 12,
  "order": 60,
  "tags": [
   "passive voice",
   "was built",
   "is made",
   "has been",
   "by vs with",
   "I was given",
   "happened (no passive)",
   "it is said that",
   "inventions and buildings"
  ],
  "v": "813747c3",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 7
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 9
   }
  ]
 },
 {
  "id": "get-passive",
  "title": "The Get Passive",
  "area": "Inglês Cotidiano",
  "icon": "🧳",
  "color": "#f3e9e4",
  "level": "B2",
  "part": 12,
  "order": 61,
  "tags": [
   "get passive",
   "got robbed",
   "got lost",
   "got stuck",
   "get married",
   "get dressed",
   "did you get paid",
   "be vs get passive",
   "travel mishaps"
  ],
  "v": "06e98991",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 6
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 8
   }
  ]
 },
 {
  "id": "first-conditional",
  "title": "Zero and First Conditional",
  "area": "Inglês Cotidiano",
  "icon": "🔀",
  "color": "#e5f0ea",
  "level": "A2",
  "part": 13,
  "order": 62,
  "tags": [
   "zero conditional",
   "first conditional",
   "if it rains",
   "no will after if",
   "when vs if",
   "unless",
   "as long as",
   "in case",
   "plans and consequences"
  ],
  "v": "31594263",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 8
   }
  ]
 },
 {
  "id": "second-conditional",
  "title": "Second Conditional",
  "area": "Inglês Cotidiano",
  "icon": "💭",
  "color": "#eee8f5",
  "level": "B1",
  "part": 13,
  "order": 63,
  "tags": [
   "second conditional",
   "if I won the lottery",
   "would",
   "if I were you",
   "could",
   "might",
   "first vs second conditional",
   "what if",
   "dreams"
  ],
  "v": "f2e50192",
  "exercises": [
   {
    "id": "mc-easy",
    "type": "mc",
    "n": 14
   },
   {
    "id": "mc-hard",
    "type": "mc",
    "reveal": "end",
    "n": 14
   },
   {
    "id": "dialogue-medium",
    "type": "gap",
    "n": 8
   },
   {
    "id": "dialogue-hard",
    "type": "gap",
    "n": 8
   }
  ]
 }
];
