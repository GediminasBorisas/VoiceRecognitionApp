const btn = document.querySelector('.talk');
const content = document.querySelector('.content1');
const assistant = document.querySelector('.content2');

//Helpful messages
const welcome = [
    'Hello, how can I help you?', 
    'Greetings. What can i assist you with today?', 
    'How can I be of service?'
];

var welcomeArray = [
    'Hi', 
    'Hei', 
    'Hello', 
    'Greetings'
];

const menu = [
    'We have two types of menus. A la carte, where you can order 1, 2 or 3 courses.', 
    ' ',
    'And Menu Lysverket, which is a 7 course tasting menu.' ,
    ' ',
    'For more information, about A la carte, say, first', 
    ' ', 
    'For more information, about tasting menu, say, second'
];

var menuArray = [
    'Serving', 
    'serving', 
    'Today', 
    'today', 
    'Food', 
    'food',
    'What food', 
    'what food', 
    'Food menu', 
    'food menu', 
    'What menu', 
    'what menu', 
    'kind of menu', 
    'kind of food', 
    'type of menu'
];

const tastingMenu = [
    'The tasting menu consists of seven dishes, with the possibility to add caviar, and or cheese.', 
    ' ', 
    'First dish, is Assortment of fresh vegetable snacks.', 
    ' ',
    'Second dish,  is Turbot with fennel and saffron sauce.', 
    ' ',
    'Third dish,  is Scallops from Øygarden with sea lettuce from Liliana, spring onion and mustard seeds.', 
    ' ',
    'Fourth dish, optional, is Sturgeon caviar Baerii with chicken aspic and oyster emulsion.', 
    ' ',
    'Fifth dish, is Cabbage roll with king crab ragû and herbs.', 
    ' ',
    'Sixth dish, is Kid goat terrine with turnip, dill, chili and fava beans.', 
    ' ',
    'Seventh dish, is Dry age dairy cow from Voss with morello cherries from Brimse and young garlic.', 
    ' ',
    'Eighth dish, optional, is Norwegian artisanal cheeses from our cheese cart', 
    ' ',
    'Ninth dish, is Strawberries, raspberries and rhubarb with almond cake', 
    ' ',
    'The caviar and cheese dishes, are not a part of the standard menu, and cost extra'
];

var tastingMenuArray = [
    'Second', 
    'second'
];

const aLaCarte = [
    'In the A la carte menu, you can choose between 1, 2, or 3 courses.', 
    ' ', 
    'For the starter you can select between.', 
    ' ',
    'Scallops with sea lettuce from Liliana and spring onion.', 
    ' ', 
    'Or',
    ' ', 
    'Cabbage roll with langoustine ragû and herbs.', 
    ' ', 
    'For the main course, you can select between.', 
    ' ', 
    'Turbot with young leeks and saffron sauce.', 
    ' ',
    'Or',
    ' ', 
    'Dry aged dairy cow from Voss with morello cherries.', 
    ' ', 
    'And for the dessert, you can select between.', 
    ' ', 
    'Milk chocolate mousse with rum & raisins.', 
    ' ',
    'Or',
    ' ',
    'Strawberries and raspberries with almond cake.',
    ' ',
    'Extra dishes that can be added, are.', 
    ' ',
    'Sturgeon caviar Baerii with chicken aspix and oyster emulsion.',
    ' ', 
    'and',
    ' ',
    'Norwegian artisanal cheeses from our cheese cart.'
];

var aLaCarteArray = [ 
    'First', 
    'first', 
    'Furst', 
    'furst'
];

const starter = [
    'For the starter you can select between.', 
    ' ',
    'Scallops with sea lettuce from Liliana and spring onion.', 
    ' ',
    'Or',
    ' ', 
    'Cabbage roll with langoustine ragû and herbs.'
]

var starterArray = [ 
    'Starter', 
    'starter',
    'Starters',
    'starters'
];

const mainCourse = [
    'For the main course, you can select between.', 
    ' ', 
    'Turbot with young leeks and saffron sauce.', 
    ' ',
    'Or',
    ' ', 
    'Dry aged dairy cow from Voss with morello cherries.'
]

var mainCourseArray = [ 
    'Main course', 
    'main course',
    'Main courses',
    'main courses',
    'Main',
    'main',
    'Mains',
    'mains'
];

const dessert = [
    'For the dessert, you can select between.', 
    ' ', 
    'Milk chocolate mousse with rum & raisins.', 
    ' ',
    'Or',
    ' ',
    'Strawberries and raspberries with almond cake.',
]

var dessertArray = [ 
    'Dessert', 
    'dessert', 
    'Desserts', 
    'desserts'
];

const price = [
    'The price for a tasting menu, is 1249, Cheese and caviar is not included', 
    'The price for a wine menu is 995, Sparkling water is not included', 
    'The price for 3 courses is 799', 
    'The price for 2 courses is 699', 
    'The price for 1 course is 499', 
    'The price for caviar, is 299', 
    'The price for cheese, is 299',
    
];

var wineArray = [ 
    'Wine', 
    'wine',
    'Vine',
    'vine',
    'Whine',
    'whine'
];

var tastingPriceArray = [ 
    'Price tasting', 
    'price tasting',
    'Price for tasting',  
    'price for tasting', 
    'Tasting price',
    'tasting price'
];

var aLaCartePriceArray = [ 
    'Price a la carte', 
    'price a la carte',
    'Price for a la carte',  
    'price for a la carte', 
    'A la carte price',
    'a la carte price',
    'Price regular', 
    'price regular',
    'Price normal', 
    'price normal',
];

var threeCoursesArray = [ 
    '3 courses', 
    '3 course', 
    'Three courses', 
    'three courses',
    'Three course', 
    'three course'
];

var twoCoursesArray = [ 
    '2 courses', 
    '2 course', 
    'Two courses', 
    'two courses',
    'Two course', 
    'two course'
];

var oneCoursesArray = [ 
    '1 courses', 
    '1 course', 
    'One courses', 
    'one courses',
    'One course', 
    'one course'
];

var caviarArray = [ 
    'Caviar', 
    'caviar', 
    'Kaviar', 
    'kaviar'
];

var cheeseArray = [ 
    'Cheese', 
    'cheese' 
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;


recognition.onstart = function() {
    console.log('Voice is activated, you can begin speaking');
}

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I did not understand';
    assistant.textContent = speech.text;

    if(welcomeArray.some((el => message.includes(el)))) {
        const finalText = welcome[Math.floor(Math.random() * welcome.length)];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(menuArray.some((el => message.includes(el)))) {
        const finalText = menu;
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(tastingMenuArray.some((el => message.includes(el)))) {
        const finalText = tastingMenu + ' ' + price[0] + ' ' + price[5] + ' ' + price[6];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(tastingPriceArray.some((el => message.includes(el)))) {
        const finalText = price[0] + ' ' + price[5] + ' ' + price[6];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(aLaCarteArray.some((el => message.includes(el)))) {
        const finalText = aLaCarte + ' ' + price[2] + ' ' + price[3] + ' ' + price[4];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(aLaCartePriceArray.some((el => message.includes(el)))) {
        const finalText = price[2] + ' ' + price[3] + ' ' + price[4];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(threeCoursesArray.some((el => message.includes(el)))) {
        const finalText = price[2];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(twoCoursesArray.some((el => message.includes(el)))) {
        const finalText = price[3];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(oneCoursesArray.some((el => message.includes(el)))) {
        const finalText = price[4];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(caviarArray.some((el => message.includes(el)))) {
        const finalText = price[5];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(cheeseArray.some((el => message.includes(el)))) {
        const finalText = price[6];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(starterArray.some((el => message.includes(el)))) {
        const finalText = starter;
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(mainCourseArray.some((el => message.includes(el)))) {
        const finalText = mainCourse;
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(dessertArray.some((el => message.includes(el)))) {
        const finalText = dessert;
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    if(wineArray.some((el => message.includes(el)))) {
        const finalText = price[1];
        speech.text = finalText;
        assistant.textContent = finalText;
    }

    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    
}