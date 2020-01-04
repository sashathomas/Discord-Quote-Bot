const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjYyOTI1NjIzNjIyMzY5Mjgy.XhBDoA.Rt3nDT2pQY85aUOOO7Td8hfdTCs";

const PREFIX = "!fsociety";

const elliot_quotes = [
    "Though she’s a psychologist she’s really bad at reading people but I’m good at reading people. My secret? I look for the worst in them.",
    "Maybe wars aren’t meant to be won, maybe they’re meant to be continuous.",
    "We’re all living in each other’s paranoia.",
    "I do see the beauty in the rules, the invisible code of chaos hiding behind the menacing face of order",
    "I’ve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign screwed into their heads.",
    "Annihilation is always the answer. We destroy parts of ourselves every day. We Photoshop our warts away. We edit the parts we hate about ourselves, modify the parts we think people hate. We curate our identity, carve it, distill it. Krista's wrong. Annihilation is all we are.",
    "Control can sometimes be an illusion. But sometimes you need illusions to gain control. Fantasy is an easy way to give meaning to the world.",
    "I wanted to save the world.",
    "A bug is never just a mistake. It represents something bigger. An error of thinking. That makes you who you are.",
    "The bug forces the software to adapt, evolve into something new because of it. Work around it or work through it. No matter what, it changes. It becomes something new. The next version. The inevitable upgrade.",
    "The devil’s at his strongest while we’re looking the other way, like a program running in the background silently, while we’re busy doing other shit.",
    "Life is so much easier when you’re numb.",
    "Hello, friend.",
    "Oh, I don't know. Is it that we collectively thought Steve Jobs was a great man, even when we knew he made billions off the backs of children? Or maybe it's that it feels like all our heroes are counterfeit? The world itself's just one big hoax. Spamming each other with our running commentary of bullshit, masquerading as insight, our social media faking as intimacy. Or is it that we voted for this? Not with our rigged elections, but with our things, our property, our money. I'm not saying anything new. We all know why we do this, not because Hunger Games books makes us happy, but because we wanna be sedated. Because it's painful not to pretend, because we're cowards. Fuck society.",
    "Elliot, just a tech.",
    "This is the world we live in. People relying on each other's mistakes to manipulate one another, use one another, even relate to one another. A warm, messy circle of humanity.",
    "Fuck god, he’s not a good enough scapegoat for me.",
    "I’m okay with things being awkward between us.",
    "Yo... you've been staring at a computer screen way too long, homie. Life's not that binary. Isn't it?",
    "What do normal people do when they get this sad?",
    "Mind awake, Body asleep.",
    "You're only seeing what's in front of you, you're not seeing what's above you.",
    "Is she listening? Of course, she is. She always is.",
    "I never want to be right about my hacks, but people always find a way to disappoint.",
    "Hello friend. Hello friend? That's lame. Maybe I should give you a name. But that's a slippery slope, you're only in my head, we have to remember that. Shit, this actually happened, I'm talking to an imaginary person. What I'm about to tell you is top secret. A conspiracy bigger than all of us. There's a powerful group of people out there that are secretly running the world. I'm talking about the guys no one knows about, the ones that are invisible. The top 1% of the top 1%, the guys that play God without permission. And now I think they're following me.",
    "I'm late for my church group. Peace.",
    "How do I take off a mask when it stops being a mask? When it's as much a part of me as me?",
    "Damn, she infected me with her time paranoia. We're all living in each other's paranoia. You definitely can't argue that. Is that why everyone tries to avoid each other?",
    "How do we know if we're in control? That we're not just making the best of what comes at us and that's it? And trying to constantly pick between two shitty options. Like your two paintings in the waiting room. Or Coke and Pepsi. McDonald's or Burger King? Hyundai or Honda?",
    "I do morphine. The key to doing morphine without turning into a junkie is to limit yourself to 30 milligrams a day. Anything more just builds up your tolerance."
]

const robot_quotes = [
    "When we lose our principles, we invite chaos.",
    "I have burrowed underneath your brain. I am nested there. I am the scream in your mind. You will cooperate.",
    "You think people out there are getting exactly what they deserve? No. They’re getting paid over or under, but someone in the chain always gets bamboozled.",
    "You don’t take down a conglomerate by shooting them in the heart. That’s the thing about conglomerates, they don’t have hearts. You take them down limb by limb. And as they unravel, their illusion of control unravels.",
    "The world is a dangerous place, Elliot, not because of those who do evil, but because of those who look on and do nothing.",
    "Sure, there are grays, but when you come right down to it, at its core, beneath every choice, there’s either a one or a zero. You either do something or you don’t. You walk out that door, you’ve decided to do nothing, to say no, which means you do not come back. You leave, you are no longer a part of this. You become a zero. If you stay, if you want to change the world, you become a yes. You become a one. So, I’ll ask you again: are you a one or a zero?",
    "People who get violent get that way because they can’t communicate.",
    "True courage is about being honest with yourself. Especially when it’s difficult.",
    "They won't win. Because one good thing came out of all this. They showed themselves. The top 1% of the 1%. The ones in control. The ones who play god without permission. And now I'm gonna take them down. All of them.",
    "Swedish scumfuck.",
    "The whole nation of Ireland makes my dick soft.",
    "Exciting time in the world right now... Exciting time.",
    "We live in a kingdom of bullshit.",
    "Behind every great fortune, there lies a great crime. That is the corporate motto of these United States. You wanna oink-oink with all the other capitalist pigs? It’s not about how much money. It’s about robbing money itself.",
    "One big song-and-dance production to sell ourselves the theater that everything's jolly, at least for a moment. But when it's all over, Santa's gone back to his shitty day job. The trees get disassembled and thrown in a closet. The music's faded away. What then? That's why you can't go anywhere.",
    "There it is. That sense of dread. It only happens when you cross a line you didn’t even know existed. Maybe that dread is a good thing. After all, when you realize you’ve crossed a line… that means you still had one. When those crossed lines are all behind you, up ahead is only darkness.",
    "So let me see if I got this. You wanna get into real estate. Is that it?"
]

const darlene_quotes = [
    "Handled. I happen to be really smart, and good at things. Not like you give a shit.",
    "Corporate greed is a trickle down desire that reaches even the bottom of the food chain.",
    "I've had a fucking rough night as well.",
    "It's cool, dude. We don't have to talk."
    "What's the hurry? She's not going to get any deader.",
    "Don't overthink this.",
    "You've gotta be fucking kidding me.",
    "You wanna know who’s crazy? Those wall street psychos.",
    "Jesus, I don’t normally say this, but I have got to Instagram this. People need to know this movie exists.",
    "We are in a war, and we are on the losing side of it. We are on our knees with guns to our heads, and they are picking us off one by one."
]

const tyrell_quotes = [
    "Unfortunately, we’re all human. Except me, of course.",
    "Give a man a gun and he can rob a bank, but give a man a bank, and he can rob the world.",
    "Power belongs to the people that take it. Nothing to do with their hard work, strong ambitions, or rightful qualifications, no. The actual will to take is often the only thing that’s necessary.",
    "You're the one constant in a sea of variables.",
    "Bonsoir, Elliot.",
    "Even extraordinary people, and I believe you are, are driven by human banalities.",
    "It's almost as if something has come alive.",
    "I don't know what's gotten into you. We're supposed to be gods together, yet you want to destroy our destiny? You're not making sense.",
    "I believe in fate. There's a reason we met. There's something between us. I can see it.",
    "In that moment, it's just you and absolute power. Nothing else. That moment stayed with me. I thought I'd feel guilty for being a murderer but... I don't. I feel wonder."
]

const whiterose_quotes = [
    "Because Phillip... I had to ask you twice.",
    "Don’t mistake my generosity for generosity.",
    "I don't want your proof. I want your belief.",
    "We will not wait for them to make a mistake. We will force them into one.",
    "You hack people. I hack time.",
    "If you pull the right strings, a puppet will dance any way you desire.",
    "Your success will always follow mine. I don't give a fuck about your accord."
]

const leon_quotes = [
    "Do you want to be here, right now? And I don't mean here-here, I mean here in a cosmic sense, bro. Like... existence could be beautiful, or it could be ugly. But that's on you.",
    "Keep turning it over in my mind. 'Frasier.' Now, my homie said it's iconic and shit. Even won a record 37 Primetime Emmys, or whatever. So I started watching. And I'm cool with suspending my disbelief a little, but this? Am I really supposed to believe a baldin' white dude from Seattle gets to smash that much? And it's not like he was slaying hood rats, neither. This nigga get more butt than ash trays. Turned me off from the fucking situation comedies altogether. Had to cleanse the palate.",
    "And I know it only got one Emmy nomination, but I'll tell you, you wanna see a believable protagonist doing extraordinary shit? Don't sleep on 'Knight Rider,' yo. You know, it's kinda sad, actually, the general lack of respect afforded to 'Knight Rider.' They throw fucking gold statues at the Crane brothers, but Michael Knight and KITT, their relationship predicted the current societal dependence on technology, and that was 30 years ago. Plus, anytime Mike spits game on a chick, I swear, I believe every goddamn word. If nothing else, 'Knight Rider' should've won a fucking statue for his dope ass theme song. I mean, the shit just stays with you. Stuck in my head right now, in fact.",
    "Damn, that’s not how you treat a caddie.",
    "Maybe that's the show's point, that shit is just pointless, ya know? Life, love, and the meaning's therein. I tell you, the human condition is a straight up tragedy, cuz.",
    "You know, back in the age of Enlightenment, mo'fuckers used chess as a means of self improvement, 'cuz there wasn't no Tony Robbins DVDs back then - this was it. So what you playin' for then? If there's no who, then what's the what? What's it for?",
    "Dream. You gotta find out the future you're fightin' for. Sometimes you gotta close your eyes and really envision that shit, bro. If you like it, then it's beautiful; if you don't, then you might as well fade the fuck out right now.",
    "Just remember cuz, you're sittin' underneath the sword of Damocles.",
    "You don't want to be alone in a place like this, cuz.",
    "It was cool, I got to stab up a bunch of Neo Nazi motherfuckas to death. Not that I’m a fan of murdering and shit. But when it comes to Neo-Nazi's, well shit I’m not gonna lie it was kinda fun.",
    "Since 5/9, momma been working 9-5.",
    "What, do you not know your Vonnegut? I gotta take a whiz, okay? Too many Code Reds this mornin'. sighs. Man, nobody fuckin' reads anymore.",
    "Well that's cool man. I'm here to provide you with anything you may need. I can pretty much find anything. And I mean anything. Smokes, pills, hard shit, porn, grandma porn. Some of these guys like that shit. Gay porn. I don't judge, man. Whatever you need.",
    "Check it out, I'll give you the low down. Routine, that's key. It's best you find your routine, whatever it is, and stick to it. Mornings, we chow. Afternoons, we hit the ball court. Evenings, that's when I get my TV time. Some people join church groups or AA or whatever but I like to binge, personally.",
    "I'll be rooting for you, cuz. Always."
]

const dom_quotes = [
    "Unfortunately, I can't let you get away with this. You've been parked in this fire lane for quite a while and I'm going to have to give you a ticket.",
    "Alexa, what is your favorite color?",
    "Alexa, when is the end of the world?",
    "I was...I am disgusted by the selfish brutality of the world, but at the same time I am utterly fascinated by it. The FBI is the perfect place for that kind of contradiction.",
    "So we sat back and waited. They call it the python approach. They'll lie and wait for the right moment to strike. You know some can go up to a year without eating? Patient predator.",
    "Believe what you want, but neither you nor I are special. I've already learned that lesson.",
    "That's because I wasn't asking a question, you dumb bitch.",
    "You've surrounded yourself with a constant reminder of mortality."
]

const price_quotes = [
    "But the minute you remove emotion from this, you'll do just fine.",
    "Everyday when that Bell rings we con people... into buying... Whatever we want, it could be freedom fries for all I give a damn! It doesnt matter.",
    "Welllickkkkk, Wellickk..., it’s not that I am out of moves, it’s that you’re not worth one.",
    "I intend to leave a legacy. The standard of which was set by god when he created man in his own image.",
    "What? What? The only move left in that scenario is a third World War. You see? I'm a mercenary. I don't play fair. I play what I want. When you deal with a mercenary, then all decorum gets tossed out the window, so you go ahead with your cute threats and your watch beeps. Order...will not protect you anymore, my friend. I will rain chaos, even if it hurts me, 'cause I would rather see you lose than win myself.",
    "And we all know a con doesn't work without the confidence.",
    "World catastrophes like this, they aren’t caused by lone wolves like you. They occur because men like me allow them. You just happened to stumble into one.",
    "Obedience will be your only task at my company.",
    "You can't force an agenda, Mr. Alderson. You have to inspire one.",
    "Politics is for puppets."
]

const vera_quotes = [
    "People walk around, act like they know what hate means. No one does, until you hate yourself. I mean truly hate yourself. That’s power.",
    "You remind me of me when I was younger. Depressed and sullen. Matter of fact, tried to kill myself a couple of times. Never could get that shit right. Biology wasn't my strong suit. I hated myself, man. Still do. Thought that shit was a weakness, for a long time, and then I realized that shit was my power.",
    "I've been waiting for this moment for a while now.",
    "I'm gonna take over New York, and you are gonna be by my side when I do.",
    "I'm just... I'm just a brave traveler who's finally come home.",
    "I'm gonna tell you a story. A story of a true 'Xmas' miracle. This is the tale of a bully and a little bitch.",
    "Now before your boy came and went, you were calling me a little bitch? Chill, girl. I didn't take no offense.",
    "My sister, only the north stars in the cosmos can help a visionary like me. But yes, you can shine a light on the dark corner of my mind. I'm just a brave traveler thats finally come home.",
    "There's a smart time to be scared, bro... and a stupid time.",
    "I ain't pleading anyway. Men can't sentence me. That is a cosmic responsibility. Someone is going to get hurt for this. That's how we get square with the universe."
]

const irving_quotes = [
    "DOM, I AM GOING TO NEED VERBAL CONFIRMATION THAT YOU’RE GRASPING THE DETAILS OF THIS AGREEMENT!",
    "You see what I mean? Nothing will stop them from having these little parties. Absolutely nothing.",
    "A story could have a mediocre beginning and middle, and oftentimes it does, but always gotta have a wow ending. Otherwise, what’s the point?",
    "In time this will get easier to live with.",
    "Tell me something. She still making her spontaneous overtures? She make you taste her yet? Remember, dollface. I was you years ago. And I’ve already done my time. I think she’ll be good with me.",
    "Don’t get too worked up, Miss. Just look at the sky. Take a deep breath. Try to enjoy the fresh air.",
    "Your revolution was only allowed to happen because it was bought and paid for by people like them.",
    "Just ’cause we lit the fuse, doesn’t mean we control the explosion.",
]

const qwerty_quotes = [
    "MOVE HIM TO A GODDAMN WINDOW!",
    "There's only one thing you can do for a friend in a bowl."
]

bot.on('ready', () => {
    console.log("This bot is ready to go.")
})

const quotes = {
    "elliot": elliot_quotes,
    "darlene": darlene_quotes,
    "tyrell": tyrell_quotes,
    "qwerty": qwerty_quotes,
    "irving": irving_quotes,
    "vera": vera_quotes,
    "dom": dom_quotes,
    "price": price_quotes,
    "leon": leon_quotes,
    "whiterose": whiterose_quotes,
    "mr.robot": robot_quotes
}

function getRandomQuote(name, message) {
    message.channel.send("> " + quotes[name][Math.floor(Math.random() * quotes[name].length)])
}

bot.on('message', message => {
    let args = message.content.substr(PREFIX.length).split(" ");

    if (args[1] && quotes.hasOwnProperty(args[1].toLowerCase())) {
        getRandomQuote(args[1].toLowerCase(), message);
    };
    
    switch(args[1]) {
        case 'bonsoir':
            message.channel.send("Bonsoir, <@" + message.author.id + ">")
            break;
        case 'gnome':
            message.channel.send("So, <@" + message.author.id + ">, I see you're running gnome.");
            message.channel.send("You know, I'm actually on KDE myself.");
            message.channel.send("I know this desktop environment is supposed to be better, but you know what they say. Old habits die hard.")
            message.channel.send("Yeah, I know what you're thinking. I'm an executive. I mean why am I even running linux?");
            message.channel.send("Again, old habits.");
            message.channel.send("It's going to be fun working with you, " + "<@" + message.author.id + ">.");
            break;
    }
});

bot.login(token);



