addLesson({
  id:"there-be-have",
  title:"There Be vs. Have",
  area:"Medicina de Família", icon:"🩺", color:"#e4f1ee", level:"B2", part:2, order:14,
  explanation:`
    <h2>There be or have?</h2>
    <p>In Portuguese, <i>ter</i> covers two different ideas. English splits them:</p>
    <table>
      <tr><th>Idea</th><th>English</th><th>Example</th></tr>
      <tr><td>Someone possesses or experiences something</td><td><b>HAVE</b> (the sentence has a subject)</td><td>The patient <b>has</b> a cough.</td></tr>
      <tr><td>Something exists in a place or time</td><td><b>THERE BE</b></td><td><b>There is</b> a patient in room 4.</td></tr>
    </table>
    <p class="note">The trap: <i>“Tem um paciente na sala 4”</i> is <b>There's a patient in room 4</b>, never <s>Has a patient</s> or <s>It has a patient</s>.</p>
    <h3>THERE BE changes tense like any verb</h3>
    <ul>
      <li>there is / there are → there was / there were</li>
      <li>there has been / there have been · there had been</li>
      <li>there will be · there's going to be · there will have been</li>
      <li>there used to be · there must be · there must have been · there would be</li>
    </ul>
    <h3>Agreement</h3>
    <p>The verb agrees with the noun that comes after it: <b>there is</b> a problem · <b>there are</b> problems · <b>there have been</b> many cases.</p>
    <h3>Dynamic HAVE</h3>
    <p>When <i>have</i> means an action (<i>have lunch, have a meeting, have trouble</i>), it can be continuous: <b>She is having</b> a meeting. <b>We were having</b> lunch.</p>`,
  exercises:[
    { id:"mc", title:"Multiple choice", type:"mc",
      instructions:"Choose the correct option. Pay attention to tense, agreement (singular/plural) and whether the sentence needs a subject (HAVE) or an existence structure (THERE BE).",
      items:[
        {q:"The patient in room 3 ___ a persistent cough for six weeks, so I've ordered a chest X-ray.",o:["there has been","has had","is having","has"],a:1,why:"has had — present perfect, possession of a symptom with <i>for</i>."},
        {q:"___ any changes in your mother's medication since her last appointment?",o:["Has there been","Did there have","Have there been","There have been"],a:2,why:"Have there been — plural <i>changes</i> + <i>since</i>."},
        {q:"When I got to the clinic this morning, ___ already fifteen patients in the waiting room.",o:["there were","there had","it had","they had"],a:0,why:"there were — existence, plural, past."},
        {q:"By the time the ambulance arrived, the patient ___ two seizures.",o:["has had","there had been","had been","had had"],a:3,why:"had had — past perfect of <i>have</i>."},
        {q:"Next Monday ___ a vaccination campaign at the health center, so we'll need extra nurses.",o:["it will have","there's going to be","will have","there are going to have"],a:1,why:"there's going to be — planned event; <i>“vai ter”</i> ≠ <i>will have</i>."},
        {q:"Mr. Souza ___ trouble sleeping lately — he wakes up at 3 a.m. almost every night.",o:["has been having","there has been","is having had","has been had"],a:0,why:"has been having — ongoing experience + <i>lately</i>."},
        {q:"The test came back negative, so ___ a mistake with the first result.",o:["it must have had","must have been","there must have been","there must have"],a:2,why:"there must have been — deduction about the past."},
        {q:"In the 1990s, ___ only one family doctor for the whole neighborhood.",o:["it used to have","there used to have","used to have","there used to be"],a:3,why:"there used to be — past state that no longer exists."},
        {q:"While we ___ lunch, the nurse called us about a patient with chest pain.",o:["had","were having","there was","have been having"],a:1,why:"were having — dynamic <i>have</i> (= eat), past continuous."},
        {q:"At this rate, ___ more than fifty dengue cases in this area by the end of the month.",o:["there will have been","it will have had","there will be had","will have been"],a:0,why:"there will have been — future perfect, existence."},
        {q:"If ___ a pediatrician on duty yesterday, we wouldn't have sent the child to the hospital.",o:["there was","we had","it had had","there had been"],a:3,why:"there had been — third conditional; <i>we had had</i> would also work, but <i>we had</i> doesn't."},
        {q:"Dr. Costa can't see you right now; she ___ a meeting with the community health agents.",o:["there is","has been","is having","is had"],a:2,why:"is having — dynamic <i>have</i> (= hold a meeting)."},
        {q:"___ no record of allergies in her chart, but always confirm with the patient.",o:["It has","There is","Has","There has"],a:1,why:"There is — existence, singular <i>record</i>."},
        {q:"The lab just called: ___ a problem with the blood samples, so we need to collect them again.",o:["there's been","it has had","has been","there has"],a:0,why:"there's been — recent event with a present result."},
        {q:"How long ___ these headaches, Mrs. Almeida?",o:["are you having","do you have","have you been having","there have been"],a:2,why:"have you been having — duration up to now."},
        {q:"___ any side effects if she stops taking the antidepressant suddenly?",o:["Will it have","Will have","Is going to have","Will there be"],a:3,why:"Will there be — future existence, question."},
        {q:"The elderly patient told us that ___ nobody at home to help her with her insulin for weeks.",o:["she had been","there had been","it had","there has"],a:1,why:"there had been — reported speech, past perfect."},
        {q:"Last year our clinic ___ a shortage of antibiotics for almost two months.",o:["had","there was","had been","has had"],a:0,why:"had — <i>the clinic</i> is the subject; <i>our clinic there was</i> is the Portuguese-style trap."},
        {q:"___ a lot of flu cases since the weather turned cold.",o:["There has","It has had","There were","There have been"],a:3,why:"There have been — plural + <i>since</i>."},
        {q:"This time next year, I ___ my residency interviews, so wish me luck!",o:["will be had","there will be","will be having","am going to be"],a:2,why:"will be having — future continuous, an event in progress at a future time."}
      ]},
    { id:"dialogue", title:"Dialogue: The Headache in Room 4", type:"gap", layout:"dialogue",
      instructions:"Complete the dialogue with THERE BE or HAVE in the correct tense. Some blanks need a negative, a question form or a modal. Tap a blank to choose.",
      scene:"A Family Health Unit (UBS) in São Paulo, Friday afternoon. Dr. Helena Prado, family physician and preceptor, talks to Lucas, a first-year resident who dreams of becoming a neurosurgeon.",
      lines:[
        ["Dr. Prado","Lucas, [[1]] a minute? [[2]] a patient in room 4 I'd like you to see before he goes home."],
        ["Lucas","Sure. What's his story?"],
        ["Dr. Prado","Mr. Antônio Ferreira, 54, bus driver. He [[3]] headaches for about three weeks. He came in today because last night he [[4]] an episode of projectile vomiting."],
        ["Lucas","[[5]] anything like this before?"],
        ["Dr. Prado","Never. He told me he [[6]] a headache like this in his entire life."],
        ["Lucas","Any red flags?"],
        ["Dr. Prado","Several. The pain is worse in the morning, and when I examined him, [[7]] some weakness in his left hand. His wife also says that over the past week [[8]] moments when he seems confused."],
        ["Lucas","That's worrying. [[9]] any history of cancer in the family?"],
        ["Dr. Prado","His father [[10]] lung cancer, and Mr. Ferreira himself smoked for thirty years."],
        ["Lucas","So we could be looking at a metastasis... or a primary brain tumor. Honestly, this is exactly the kind of case that made me want to become a neurosurgeon."],
        ["Dr. Prado","I know — you remind me every day. But remember: [[11]] no neurosurgical cases at all if family doctors didn't catch the red flags first."],
        ["Lucas","Fair point. What's the plan?"],
        ["Dr. Prado","I've already called the regional hospital. [[12]] a CT slot for him tomorrow at 8 a.m."],
        ["Lucas","And if [[13]] a mass?"],
        ["Dr. Prado","Then he [[14]] an urgent appointment with neurosurgery. I'll make sure of it."],
        ["Lucas","Could I go with him? Surely [[15]] another resident who can cover my patients here."],
        ["Dr. Prado","Nice try. You [[16]] plenty of time in the operating room in a few years. Right now, [[17]] eleven patients waiting for you."],
        ["Lucas","Eleven? When I left for lunch, [[18]] only four!"],
        ["Dr. Prado","Welcome to primary care. While you [[19]] lunch, a school van full of kids with conjunctivitis showed up."],
        ["Lucas","By the end of this rotation, I [[20]] more patients than I saw in all of med school."],
        ["Dr. Prado","Good. Last year I [[21]] a resident just like you — obsessed with neurosurgery."],
        ["Lucas","What happened to him?"],
        ["Dr. Prado","He's a neurosurgery R3 now. He told me that if he [[22]] his rotation here, he would never have learned to really listen to patients."],
        ["Lucas","[[23]] many residents like him over the years?"],
        ["Dr. Prado","Plenty. When I started here, [[24]] only two doctors in this unit. Now we're six, and half of the residents I've trained [[25]] big plans for surgery."],
        ["Lucas","Then I'm in good company. Let's go see Mr. Ferreira."],
        ["Dr. Prado","Go. And Lucas — [[26]] a good neurosurgeon who wasn't a good clinician first."]
      ],
      answers:{
        1:["do you have"],2:["there's","there is"],3:["has been having"],4:["had"],5:["has he had"],
        6:["had never had"],7:["there was"],8:["there have been"],9:["is there"],10:["had"],
        11:["there would be"],12:["there's going to be","there will be","there is","there's"],13:["there is","there's"],
        14:["will have"],15:["there must be","there will be","there's","there is"],16:["will have"],17:["there are"],
        18:["there were"],19:["were having"],20:["will have had"],21:["had"],22:["hadn't had","had not had"],
        23:["have there been"],24:["there used to be","there were"],25:["have had"],
        26:["there's never been","there has never been","there will never be"]
      },
      why:{
        1:"HAVE = possess (time). Simple present question.",
        2:"Existence: a patient is in room 4.",
        3:"Ongoing experience up to now + <i>for about three weeks</i>.",
        4:"Finished past event: <i>last night</i>.",
        5:"Life experience up to now + <i>before</i>.",
        6:"Reported speech: <i>has never had</i> → <i>had never had</i>.",
        7:"Existence in the past: when I examined him.",
        8:"Repeated existence up to now (<i>over the past week</i>), plural <i>moments</i>.",
        9:"Question about existence, present.",
        10:"Finished past: his father had the disease.",
        11:"Hypothetical: there would be no cases if…",
        12:"Planned, already arranged: <i>there's going to be</i>.",
        13:"First conditional: present after <i>if</i>.",
        14:"Future result; <i>he</i> is the subject.",
        15:"Deduction: there must be.",
        16:"Future; <i>you</i> is the subject.",
        17:"Existence now, plural.",
        18:"Existence in the past, plural.",
        19:"Dynamic <i>have</i> (= eat) in progress in the past.",
        20:"Future perfect: completed by the end of the rotation.",
        21:"Finished past: I had a resident.",
        22:"Third conditional: if he hadn't had…",
        23:"Existence up to now, plural, question.",
        24:"Past situation that has changed.",
        25:"Experience up to now; <i>the residents</i> is the subject.",
        26:"Never existed, up to today."
      }}
  ]
});
