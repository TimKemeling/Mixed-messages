//random word arrays
const word1 = ['Hi','Hello','Hey','Heya','Howdy','G`Day','What`s up','Hey there','Greetings','Aloha']
const word2 = ['awesome','great','epic','amazing','really good','so well','sublime','amazeballs','extraordinary','incredible']
const word3 = ['Keep going','You got this','Keep on keeping on','You can do this']
const emoji = [`:)`,`:D`,'(ツ)','(◕‿◕✿)','(ᵔᴥᵔ)','(~˘▾˘)~','\\ (•◡•) /']
const fact = [
    'some turtles can breathe from their butt',
    'all bell pepper colours are the same pepper, the only difference is the ripeness of the pepper',
    'you can always see your nose but your brain filters it out',
    'some cats are allergic to humans',
    'the majority of your brain is fat',
    'high heels were originally worn by men',
    'every second breath you take comes from the ocean',
    'coral is a animal',
    'the deepest scuba dive ever done was 332 meters and 35 cm deep',
    'sea otters hold hands while they sleep',
    'the unicorn is the national animal of scotland'
]
const sign = ['Stay cool', 'Stay foxy', 'See ya', 'Catch you later', 'Catch you on the flippety flip']

//random word pickers
const i = word1[Math.floor(Math.random() * word1.length)]
const j = word2[Math.floor(Math.random() * word2.length)]
const k = word3[Math.floor(Math.random() * word3.length)]
const e = emoji[Math.floor(Math.random() * emoji.length)]
const f = fact[Math.floor(Math.random() * fact.length)]
const signOff = sign[Math.floor(Math.random() * sign.length)]

//random sentence generators
const randomEncouragement = () => {
    return `${i}! You are doing ${j}! ${k}!`
}

const randomGreeting = () => {
    return `${i}! Hope you have a ${j} day! ${e}`
}

const randomFact = () =>{
    return `${i}! Did you know that ${f}? ${signOff}!`
}

let num = Math.floor(Math.random() * 3)

switch (num) {
    case 0:
        console.log(randomEncouragement())
        break;
    case 1:
        console.log(randomGreeting())
        break;
    case 2:
        console.log(randomFact())
        break;
}
