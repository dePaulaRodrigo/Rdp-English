addLesson({
  id:"the-more-the-better",
  title:"The More…, The Better",
  area:"Inglês Cotidiano", icon:"📚", color:"#eae6f4", level:"B2", part:8, order:42,
  tags:["the more the better","double comparative","the sooner the better","the more the merrier","word order","habits and study"],
  explanation:{
pt:`
    <h2>The … the = quanto mais …, mais …</h2>
    <p>Estrutura: <b>the + comparativo + sujeito + verbo, the + comparativo + sujeito + verbo</b>.</p>
    <ul>
      <li>The more you practice, the better you get.</li>
      <li>The harder you work, the richer you get.</li>
      <li>The colder it gets, the easier it is to stay home.</li>
    </ul>
    <h3>A versão curta</h3>
    <ul>
      <li><b>The more, the better.</b> — Quanto mais, melhor.</li>
      <li><b>The sooner, the better.</b> — Quanto antes, melhor.</li>
      <li><b>The more, the merrier.</b> — Quanto mais gente, melhor.</li>
    </ul>
    <h3>A ordem das palavras</h3>
    <p>O que é comparado vai <b>junto</b> com o comparativo, logo no começo:</p>
    <ul>
      <li>The more <b>books</b> you read, the more <b>words</b> you learn. (<s>The more you read books</s>)</li>
      <li>The faster you drive, the more <b>fuel</b> you use.</li>
    </ul>
    <h3>Com LESS e FEWER</h3>
    <ul>
      <li>The less you sleep, the worse you feel.</li>
      <li>The fewer mistakes you make, the higher your grade.</li>
    </ul>
    <h3>Sem o verbo BE</h3>
    <p>O <i>be</i> pode cair: The higher the risk, the bigger the profit. · The older the wine, the better.</p>
    <p class="note">A \"Lei de Moore\" (Gordon Moore, 1965): the smaller the transistors, the more of them fit on a chip.</p>`,
en:`
    <h2>The … the</h2>
    <p>Structure: <b>the + comparative + subject + verb, the + comparative + subject + verb</b>.</p>
    <ul>
      <li>The more you practice, the better you get.</li>
      <li>The harder you work, the richer you get.</li>
      <li>The colder it gets, the easier it is to stay home.</li>
    </ul>
    <h3>The short version</h3>
    <ul>
      <li><b>The more, the better.</b></li>
      <li><b>The sooner, the better.</b></li>
      <li><b>The more, the merrier.</b> (more people make it more fun)</li>
    </ul>
    <h3>Word order</h3>
    <p>What is being compared goes <b>with</b> the comparative, at the start:</p>
    <ul>
      <li>The more <b>books</b> you read, the more <b>words</b> you learn. (<s>The more you read books</s>)</li>
      <li>The faster you drive, the more <b>fuel</b> you use.</li>
    </ul>
    <h3>With LESS and FEWER</h3>
    <ul>
      <li>The less you sleep, the worse you feel.</li>
      <li>The fewer mistakes you make, the higher your grade.</li>
    </ul>
    <h3>Without BE</h3>
    <p><i>Be</i> can be dropped: The higher the risk, the bigger the profit. · The older the wine, the better.</p>
    <p class="note">Moore's Law (Gordon Moore, 1965): the smaller the transistors, the more of them fit on a chip.</p>`
  },
  vocab:{
pt:`
    <h2>Hábitos e estudo</h2>
    <table>
      <tr><th>Inglês</th><th>Português</th></tr>
      <tr><td>a habit · to form a habit</td><td>um hábito · criar um hábito</td></tr>
      <tr><td>to procrastinate</td><td>procrastinar</td></tr>
      <tr><td>to focus</td><td>concentrar-se</td></tr>
      <tr><td>to review</td><td>revisar</td></tr>
      <tr><td>to memorize</td><td>decorar</td></tr>
      <tr><td>consistent</td><td>constante, regular</td></tr>
      <tr><td>a goal</td><td>uma meta</td></tr>
      <tr><td>a deadline</td><td>um prazo</td></tr>
      <tr><td>screen time</td><td>tempo de tela</td></tr>
      <tr><td>to get distracted</td><td>distrair-se</td></tr>
      <tr><td>to make progress</td><td>progredir</td></tr>
      <tr><td>a grade</td><td>uma nota</td></tr>
    </table>
    <p class="note">Em 1885, o psicólogo alemão Hermann Ebbinghaus mostrou a \"curva do esquecimento\": quanto mais tempo passa, mais esquecemos — a não ser que a gente revise.</p>`,
en:`
    <h2>Habits and study</h2>
    <table>
      <tr><th>English</th><th>Portuguese</th></tr>
      <tr><td>a habit · to form a habit</td><td>um hábito · criar um hábito</td></tr>
      <tr><td>to procrastinate</td><td>procrastinar</td></tr>
      <tr><td>to focus</td><td>concentrar-se</td></tr>
      <tr><td>to review</td><td>revisar</td></tr>
      <tr><td>to memorize</td><td>decorar</td></tr>
      <tr><td>consistent</td><td>constante, regular</td></tr>
      <tr><td>a goal</td><td>uma meta</td></tr>
      <tr><td>a deadline</td><td>um prazo</td></tr>
      <tr><td>screen time</td><td>tempo de tela</td></tr>
      <tr><td>to get distracted</td><td>distrair-se</td></tr>
      <tr><td>to make progress</td><td>progredir</td></tr>
      <tr><td>a grade</td><td>uma nota</td></tr>
    </table>
    <p class="note">In 1885, the German psychologist Hermann Ebbinghaus described the \"forgetting curve\": the more time passes, the more we forget — unless we review.</p>`
  },
  exercises:[
    { id:"mc-easy", title:"Multiple choice — the … the", type:"mc",
      instructions:{pt:"Escolha a forma correta.", en:"Choose the correct form."},
      items:[
        {q:"The more you practice, ___ you get.", o:["the better","better","the best"], a:0, sub:"structure",
         why:{pt:"The + comparativo nas duas metades.", en:"The + comparative in both halves."}},
        {q:"___ you study, the more you learn.", o:["The more","More","The most"], a:0, sub:"structure",
         why:{pt:"Começa com the + comparativo.", en:"It starts with the + comparative."}},
        {q:"The sooner, ___.", o:["the better","the good","better"], a:0, sub:"short version",
         why:{pt:"Expressão fixa: the sooner, the better.", en:"Fixed phrase: the sooner, the better."}},
        {q:"The harder you work, the ___ you get.", o:["richer","more rich","rich"], a:0, sub:"comparatives",
         why:{pt:"Rich é curto: richer.", en:"Rich is short: richer."}},
        {q:"The colder it gets, the ___ it is to stay home.", o:["easier","more easy","easy"], a:0, sub:"comparatives",
         why:{pt:"Y vira I: easier.", en:"Y becomes I: easier."}},
        {q:"The less you sleep, the ___ you feel.", o:["worse","badder","worst"], a:0, sub:"less",
         why:{pt:"Bad → worse.", en:"Bad → worse."}},
        {q:"Come to the party with your friends! The more, the ___.", o:["merrier","merry","most merry"], a:0, sub:"short version",
         why:{pt:"Expressão fixa: the more, the merrier.", en:"Fixed phrase: the more, the merrier."}},
        {q:"The older I get, the ___ I become.", o:["wiser","more wise","wisest"], a:0, sub:"comparatives",
         why:{pt:"Wise é curto: wiser.", en:"Wise is short: wiser."}},
        {q:"The more you read, ___ your vocabulary.", o:["the bigger","bigger","the biggest"], a:0, sub:"structure",
         why:{pt:"The + comparativo.", en:"The + comparative."}},
        {q:"The ___ the house, the more expensive it is.", o:["bigger","biggest","big"], a:0, sub:"comparatives",
         why:{pt:"Comparativo: bigger.", en:"Comparative: bigger."}},
        {q:"The more I listen to this song, the ___ I like it.", o:["more","most","much"], a:0, sub:"structure",
         why:{pt:"The more … the more.", en:"The more … the more."}},
        {q:"The faster you drive, the more ___ you use.", o:["fuel","fuels","the fuel"], a:0, sub:"word order",
         why:{pt:"The more + substantivo.", en:"The more + noun."}},
        {q:"The ___ mistakes you make, the higher your grade.", o:["fewer","less","least"], a:0, sub:"less",
         why:{pt:"Mistakes é contável: fewer.", en:"Mistakes is countable: fewer."}},
        {q:"The more you focus, the ___ you finish.", o:["faster","more fast","fastest"], a:0, sub:"comparatives",
         why:{pt:"Fast é curto: faster.", en:"Fast is short: faster."}}
      ]},
    { id:"mc-hard", title:"Multiple choice — word order and short forms", type:"mc", reveal:"end",
      instructions:{pt:"Escolha a opção correta em todos os itens e depois toque em Corrigir respostas.", en:"Choose the correct option for every item, then tap Corrigir respostas."},
      items:[
        {q:"\"Quanto mais livros você lê, mais palavras aprende.\" → ___", o:["The more books you read, the more words you learn.","The more you read books, the more you learn words.","More books you read, more words you learn."], a:0, sub:"word order",
         why:{pt:"O substantivo vai junto com the more.", en:"The noun goes with the more."}},
        {q:"\"Quanto antes, melhor.\" → ___", o:["The sooner, the better.","Sooner, better.","The soon, the good."], a:0, sub:"short version",
         why:{pt:"The sooner, the better.", en:"The sooner, the better."}},
        {q:"The higher the risk, the ___ the profit.", o:["bigger","biggest","more big"], a:0, sub:"without be",
         why:{pt:"Sem be: the + comparativo + substantivo.", en:"Without be: the + comparative + noun."}},
        {q:"The more ___ he makes, the more he spends.", o:["money","moneys","the money"], a:0, sub:"word order",
         why:{pt:"The more + substantivo incontável.", en:"The more + uncountable noun."}},
        {q:"The ___ time you spend on your phone, the more you can read.", o:["less","fewer","least"], a:0, sub:"less",
         why:{pt:"Time é incontável: less.", en:"Time is uncountable: less."}},
        {q:"The more ___, the more relaxed I feel.", o:["I exercise","exercise I","do I exercise"], a:0, sub:"word order",
         why:{pt:"Sujeito + verbo depois do comparativo, sem inversão.", en:"Subject + verb after the comparative, no inversion."}},
        {q:"The older the wine, ___.", o:["the better","the better is it","better it is"], a:0, sub:"without be",
         why:{pt:"Versão curta, sem be.", en:"Short version, without be."}},
        {q:"The smaller the transistors, the ___ of them fit on a chip.", o:["more","most","many"], a:0, sub:"structure",
         why:{pt:"The more.", en:"The more."}},
        {q:"The ___ you review, the less you forget.", o:["more often","oftener","most often"], a:0, sub:"comparatives",
         why:{pt:"Often → more often (o mais comum).", en:"Often → more often (the most common form)."}},
        {q:"The more ___ the class, the more students pay attention.", o:["interesting","interested","interest"], a:0, sub:"without be",
         why:{pt:"A aula causa o interesse: interesting.", en:"The class causes the interest: interesting."}},
        {q:"The more you procrastinate, the ___ it is to start.", o:["harder","more hard","hardest"], a:0, sub:"comparatives",
         why:{pt:"Hard é curto: harder.", en:"Hard is short: harder."}},
        {q:"The ___ we leave, the earlier we'll arrive.", o:["earlier","more early","earliest"], a:0, sub:"comparatives",
         why:{pt:"Y vira I: earlier.", en:"Y becomes I: earlier."}},
        {q:"The more consistent you are, the ___ progress you make.", o:["more","most","much"], a:0, sub:"structure",
         why:{pt:"The more + substantivo.", en:"The more + noun."}},
        {q:"\"The more, the merrier\" means: ___", o:["More people make it more fun.","More money makes you happier.","The more you eat, the happier you are."], a:0, sub:"short version",
         why:{pt:"Usado para convidar mais gente.", en:"Used to invite more people."}}
      ]},
    { id:"dialogue-medium", title:"Dialogue: Study Tips", type:"gap", layout:"dialogue",
      instructions:{pt:"Complete o diálogo com o comparativo da palavra entre parênteses.", en:"Complete the dialogue with the comparative of the word in parentheses."},
      scene:{pt:"Duda vai prestar vestibular. Ela pede conselhos ao primo, Gui, que já está na faculdade.", en:"Duda is preparing for the university entrance exam. She asks her cousin Gui, who is already in college, for advice."},
      lines:[
        ["Duda","I study for hours, but I forget everything!"],
        ["Gui","Do you review? The [[1]] you review, the less you forget. (often)"],
        ["Duda","Not really. I just read and read."],
        ["Gui","Try practice tests. The [[2]] tests you take, the [[3]] you get. (many · good)"],
        ["Duda","OK. And my phone? I check it all the time."],
        ["Gui","Put it in another room. The [[4]] distractions, the better. (few)"],
        ["Duda","What about sleep? I sleep five hours."],
        ["Gui","That's bad. The [[5]] you sleep, the worse your memory. (little)"],
        ["Duda","Really? I thought the [[6]] I stay up, the more I learn. (late)"],
        ["Gui","No way. Your brain needs rest."],
        ["Duda","When should I start?"],
        ["Gui","Today! The [[7]], the better. (soon)"]
      ],
      bank:["more often","more","better","fewer","less","later","sooner","most","lesser","soonest"],
      answers:{1:["more often"],2:["more"],3:["better"],4:["fewer"],5:["less"],6:["later"],7:["sooner"]},
      sub:{1:"comparatives",2:"word order",3:"comparatives",4:"less",5:"less",6:"comparatives",7:"short version"},
      why:{
        1:{pt:"Often → more often.", en:"Often → more often."},
        2:{pt:"Many → more, junto com o substantivo.", en:"Many → more, with the noun."},
        3:{pt:"Good → better.", en:"Good → better."},
        4:{pt:"Distractions é contável: fewer.", en:"Distractions is countable: fewer."},
        5:{pt:"Little → less.", en:"Little → less."},
        6:{pt:"Late → later.", en:"Late → later."},
        7:{pt:"The sooner, the better.", en:"The sooner, the better."}
      }},
    { id:"dialogue-hard", title:"Dialogue: The New Habit", type:"gap", layout:"dialogue",
      instructions:{pt:"Complete o diálogo sem pistas. O banco tem formas erradas.", en:"Complete the dialogue without cues. The bank has wrong forms."},
      scene:{pt:"Roberto começou a correr de manhã. Ele conversa com a colega Ana no café do escritório.", en:"Roberto started running in the morning. He talks to his coworker Ana at the office coffee machine."},
      lines:[
        ["Ana","You look great, Roberto! What happened?"],
        ["Roberto","I run every morning now. And the more I run, [[1]] I feel."],
        ["Ana","Isn't it hard to wake up early?"],
        ["Roberto","At first. But [[2]] you do it, the easier it gets."],
        ["Ana","I want to start, but I'm always tired."],
        ["Roberto","That's the funny thing. The more you exercise, [[3]] energy you have."],
        ["Ana","Really? How far do you run?"],
        ["Roberto","Five kilometers. But [[4]] the distance, the more I enjoy it."],
        ["Ana","Can I join you?"],
        ["Roberto","Of course! [[5]], the merrier."],
        ["Ana","When?"],
        ["Roberto","Tomorrow at six. And remember: [[6]] you go to bed, the earlier you can wake up."],
        ["Ana","Six?! OK… the earlier, [[7]], I guess."]
      ],
      bank:["the better","better","the more often","more often","the more","the longer","longer","The more","More","the earlier","the earliest","the best"],
      answers:{1:["the better"],2:["the more often"],3:["the more"],4:["the longer"],5:["The more"],6:["the earlier"],7:["the better"]},
      sub:{1:"structure",2:"comparatives",3:"word order",4:"without be",5:"short version",6:"comparatives",7:"short version"},
      why:{
        1:{pt:"The + comparativo: the better.", en:"The + comparative: the better."},
        2:{pt:"The + comparativo: the more often.", en:"The + comparative: the more often."},
        3:{pt:"The more + substantivo (energy).", en:"The more + noun (energy)."},
        4:{pt:"Sem be: the longer the distance.", en:"Without be: the longer the distance."},
        5:{pt:"The more, the merrier.", en:"The more, the merrier."},
        6:{pt:"The + comparativo: the earlier.", en:"The + comparative: the earlier."},
        7:{pt:"The earlier, the better.", en:"The earlier, the better."}
      }}
  ]
});
