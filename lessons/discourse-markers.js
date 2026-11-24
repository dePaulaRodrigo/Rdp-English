addLesson({
  id:"discourse-markers",
  title:"Linking Words and Hedging",
  area:"Inglês Cotidiano", icon:"🔗", color:"#e6eef0", level:"C1", part:16, order:80,
  tags:["linking words","however","moreover","admittedly","in the end","hedging","suggest","tend to","cities and transportation"],
  explanation:{
pt:`
    <h2>Conectivos e linguagem cautelosa</h2>
    <p>Na escrita acadêmica e profissional, o texto convence pela forma como as ideias se ligam e pela cautela das afirmações. Os conectivos mostram a relação entre as ideias. O <b>hedging</b> (linguagem cautelosa) evita afirmar mais do que os dados permitem.</p>
    <h3>Conectivos por função</h3>
    <table>
      <tr><th>Função</th><th>Conectivos</th></tr>
      <tr><td>Acrescentar</td><td>moreover, furthermore, in addition</td></tr>
      <tr><td>Contrastar</td><td>however, nevertheless, on the other hand</td></tr>
      <tr><td>Conceder</td><td>admittedly, granted, that said</td></tr>
      <tr><td>Concluir</td><td>therefore, consequently, as a result</td></tr>
      <tr><td>Exemplificar</td><td>for instance, for example</td></tr>
      <tr><td>Resumir</td><td>in short, overall</td></tr>
    </table>
    <p><b>On the other hand</b> só aparece quando há dois lados comparados:<br>
    Renting is flexible. On the other hand, buying builds equity.</p>
    <h3>Despite × although</h3>
    <ul>
      <li><b>Despite</b> + substantivo — Despite the high cost, the project was approved.</li>
      <li><b>Although</b> + oração — Although it was expensive, the project was approved.</li>
    </ul>
    <h3>Hedging</h3>
    <ul>
      <li>The results <b>suggest</b> that… — em vez de "The results prove that…"</li>
      <li>This is <b>arguably</b> the best option.</li>
      <li>Prices <b>tend to</b> rise in December.</li>
      <li>It <b>appears</b> that the system failed.</li>
      <li><b>To some extent</b>, the plan worked.</li>
    </ul>
    <p class="note">Erros típicos do brasileiro:<br>
    <i>on the other hand</i> com o sentido de "além disso" → <b>moreover</b><br>
    <i>in the other hand</i> → <b>on</b> the other hand<br>
    <i>at the end</i> com o sentido de "no fim das contas" → <b>in</b> the end<br>
    <i>The plan was good, however it failed.</i> → The plan was good<b>;</b> however<b>,</b> it failed.</p>`,
en:`
    <h2>Linking words and hedging</h2>
    <p>In academic and professional writing, a text persuades through the way its ideas connect and through careful claims. Linking words show how ideas relate. <b>Hedging</b> keeps you from claiming more than the data allows.</p>
    <h3>Linking words by function</h3>
    <table>
      <tr><th>Function</th><th>Linking words</th></tr>
      <tr><td>Adding</td><td>moreover, furthermore, in addition</td></tr>
      <tr><td>Contrasting</td><td>however, nevertheless, on the other hand</td></tr>
      <tr><td>Conceding</td><td>admittedly, granted, that said</td></tr>
      <tr><td>Concluding</td><td>therefore, consequently, as a result</td></tr>
      <tr><td>Giving examples</td><td>for instance, for example</td></tr>
      <tr><td>Summing up</td><td>in short, overall</td></tr>
    </table>
    <p><b>On the other hand</b> only works when you compare two sides:<br>
    Renting is flexible. On the other hand, buying builds equity.</p>
    <h3>Despite × although</h3>
    <ul>
      <li><b>Despite</b> + noun — Despite the high cost, the project was approved.</li>
      <li><b>Although</b> + clause — Although it was expensive, the project was approved.</li>
    </ul>
    <h3>Hedging</h3>
    <ul>
      <li>The results <b>suggest</b> that… — instead of "The results prove that…"</li>
      <li>This is <b>arguably</b> the best option.</li>
      <li>Prices <b>tend to</b> rise in December.</li>
      <li>It <b>appears</b> that the system failed.</li>
      <li><b>To some extent</b>, the plan worked.</li>
    </ul>
    <p class="note">Typical mistakes for Brazilians:<br>
    <i>on the other hand</i> meaning "also" → <b>moreover</b><br>
    <i>in the other hand</i> → <b>on</b> the other hand<br>
    <i>at the end</i> meaning "finally, after all" → <b>in</b> the end<br>
    <i>The plan was good, however it failed.</i> → The plan was good<b>;</b> however<b>,</b> it failed.</p>`
  },
  exercises:[
    { id:"mc-easy", title:"Multiple choice — linking words", type:"mc",
      instructions:{pt:"Escolha o conectivo que mostra a relação certa entre as ideias.", en:"Choose the linking word that shows the right relationship between the ideas."},
      items:[
        {q:"The project was expensive. ___, it was delivered on time.", o:["Nevertheless","Moreover","Therefore"], a:0, sub:"contrast",
         why:{pt:"Ideia contrária — contraste.", en:"Opposite idea: contrast."}},
        {q:"The hotel is close to the beach. ___, breakfast is included.", o:["Moreover","However","Therefore"], a:0, sub:"addition",
         why:{pt:"Mais uma vantagem — adição.", en:"One more advantage: addition."}},
        {q:"Sales fell for three months. ___, the company cut costs.", o:["As a result","However","For instance"], a:0, sub:"result",
         why:{pt:"Consequência — resultado.", en:"Consequence: result."}},
        {q:"Many cities have invested in bike lanes; ___, Copenhagen and Amsterdam.", o:["for instance","however","therefore"], a:0, sub:"example",
         why:{pt:"Exemplos — for instance.", en:"Examples: for instance."}},
        {q:"Renting is flexible. ___, buying builds equity.", o:["On the other hand","Moreover","Consequently"], a:0, sub:"contrast",
         why:{pt:"Dois lados comparados — on the other hand.", en:"Two sides compared: on the other hand."}},
        {q:"___, the plan has some weak points. That said, it's the best option we have.", o:["Admittedly","Therefore","Furthermore"], a:0, sub:"concession",
         why:{pt:"Admitir um ponto fraco — concessão.", en:"Admitting a weak point: concession."}},
        {q:"The results ___ that the treatment works, but more studies are needed.", o:["suggest","prove","guarantee"], a:0, sub:"hedging",
         why:{pt:"Mais estudos são necessários — afirmação cautelosa.", en:"More studies needed: a careful claim."}},
        {q:"Prices ___ rise in December.", o:["tend to","are tend to","tends to"], a:0, sub:"hedging",
         why:{pt:"Tendência — tend to + verbo; prices é plural.", en:"Tendency: tend to + verb; prices is plural."}},
        {q:"___, the meeting was productive.", o:["Overall","In the other hand","At the end"], a:0, sub:"summing up",
         why:{pt:"Avaliação geral — overall.", en:"General evaluation: overall."}},
        {q:"We missed the train; ___, we arrived late.", o:["consequently","however","for instance"], a:0, sub:"result",
         why:{pt:"Consequência — resultado.", en:"Consequence: result."}}
      ]},
    { id:"mc-hard", title:"Multiple choice — careful and precise", type:"mc", reveal:"end",
      instructions:{pt:"Escolha a forma correta. A correção aparece no final.", en:"Choose the correct form. You will see the answers at the end."},
      items:[
        {q:"The car is fast. ___, it's very cheap to run.", o:["Moreover","On the other hand","In the other hand","However"], a:0, sub:"addition",
         why:{pt:"Mais uma vantagem — adição, não contraste.", en:"Another advantage: addition, not contrast."}},
        {q:"We argued for hours, but ___ we found a solution.", o:["in the end","at the end","in end","at end"], a:0, sub:"summing up",
         why:{pt:"No fim das contas — in the end.", en:"Finally, after all: in the end."}},
        {q:"The plan was good; ___, it failed.", o:["however","but","although","despite"], a:0, sub:"contrast",
         why:{pt:"Depois de ponto e vírgula, conectivo com vírgula — however.", en:"After a semicolon, an adverb with a comma: however."}},
        {q:"Many critics disagree, but this is ___ the most important novel of the century.", o:["arguably","undoubtedly","certainly","definitely"], a:0, sub:"hedging",
         why:{pt:"Há discordância — afirmação cautelosa.", en:"There is disagreement: a careful claim."}},
        {q:"It ___ that the system failed during the update.", o:["appears","appear","is appearing","looks"], a:0, sub:"hedging",
         why:{pt:"It appears that — parece que.", en:"It appears that."}},
        {q:"___ some extent, the policy worked.", o:["To","In","At","Until"], a:0, sub:"hedging",
         why:{pt:"Expressão fixa — to some extent.", en:"Fixed expression: to some extent."}},
        {q:"___ the high cost, the project was approved.", o:["Despite","Although","However","Even"], a:0, sub:"contrast",
         why:{pt:"Antes de substantivo — despite.", en:"Before a noun: despite."}},
        {q:"___ it was expensive, the project was approved.", o:["Although","Despite","However","In spite"], a:0, sub:"contrast",
         why:{pt:"Antes de oração — although.", en:"Before a clause: although."}},
        {q:"The data ___ a link between sleep and memory, but the sample was small.", o:["suggest","prove","confirm","guarantee"], a:0, sub:"hedging",
         why:{pt:"Amostra pequena — afirmação cautelosa.", en:"Small sample: a careful claim."}},
        {q:"Not only is the course cheap, ___ it is also excellent.", o:["but","and","however","moreover"], a:0, sub:"addition",
         why:{pt:"Not only … but also.", en:"Not only … but also."}}
      ]},
    { id:"dialogue-medium", title:"Text: Remote Work", type:"gap", layout:"text",
      instructions:{pt:"Complete o parágrafo. Toque em uma lacuna e escolha a opção. O banco tem opções a mais.", en:"Complete the paragraph. Tap a blank and choose an option. The bank has extra options."},
      lines:[
        "Remote work has clear benefits. [[1]], employees no longer spend hours commuting. [[2]], many of them report higher productivity.",
        "[[3]], remote work is not ideal for everyone. Some workers feel isolated and, [[4]], less motivated.",
        "[[5]], the data on productivity is mixed: some studies [[6]] that hybrid models work best.",
        "[[7]], remote work seems to be here to stay."
      ],
      bank:["For instance","Moreover","However","as a result","Admittedly","suggest","Overall","In the other hand","prove","At the end","Despite"],
      answers:{1:["For instance","For example"],2:["Moreover","Furthermore","In addition"],3:["However"],4:["as a result","consequently"],5:["Admittedly"],6:["suggest"],7:["Overall"]},
      sub:{1:"example",2:"addition",3:"contrast",4:"result",5:"concession",6:"hedging",7:"summing up"},
      why:{
        1:{pt:"Exemplo de benefício — for instance.", en:"An example of a benefit: for instance."},
        2:{pt:"Mais um benefício — adição.", en:"Another benefit: addition."},
        3:{pt:"Muda de lado — contraste.", en:"Changing sides: contrast."},
        4:{pt:"Consequência — resultado.", en:"Consequence: result."},
        5:{pt:"Admite um ponto fraco — concessão.", en:"Admitting a weak point: concession."},
        6:{pt:"Afirmação cautelosa — suggest.", en:"A careful claim: suggest."},
        7:{pt:"Avaliação geral — overall.", en:"General evaluation: overall."}
      }},
    { id:"dialogue-hard", title:"Typing: The New Metro Line", type:"gap", layout:"text", input:"type",
      instructions:{pt:"Digite o conectivo ou a palavra que falta. A pista entre parênteses indica a função.", en:"Type the missing linking word or verb. The hint in parentheses shows its function."},
      lines:[
        "The new metro line was expensive. [[1]], it has reduced traffic downtown. [[2]], it has cut air pollution.",
        "[[3]], the construction caused problems for local shops. [[4]], some of them closed.",
        "Early data [[5]] that ridership will keep growing, and apartment prices near new stations [[6]] to rise.",
        "[[7]], the project seems to have been worth the cost."
      ],
      hint:{1:"contraste",2:"adição",3:"concessão",4:"resultado",5:"afirmação cautelosa",6:"tendência",7:"resumo"},
      answers:{1:["However","Nevertheless","Nonetheless","Still"],2:["Moreover","Furthermore","In addition","Additionally","Also"],3:["Admittedly","Granted","True"],4:["As a result","Consequently","Therefore","As a consequence"],5:["suggest","suggests","indicate","indicates"],6:["tend"],7:["Overall","In short","All in all","On balance","On the whole","In conclusion"]},
      sub:{1:"contrast",2:"addition",3:"concession",4:"result",5:"hedging",6:"hedging",7:"summing up"},
      why:{
        1:{pt:"Ideia contrária ao custo — contraste.", en:"Against the cost: contrast."},
        2:{pt:"Mais uma vantagem — adição.", en:"Another advantage: addition."},
        3:{pt:"Admite um problema — concessão.", en:"Admitting a problem: concession."},
        4:{pt:"Consequência — resultado.", en:"Consequence: result."},
        5:{pt:"Dados iniciais pedem cautela — suggest.", en:"Early data calls for a careful claim: suggest."},
        6:{pt:"Tendência — tend to.", en:"Tendency: tend to."},
        7:{pt:"Avaliação geral — overall.", en:"General evaluation: overall."}
      }}
  ]
});
