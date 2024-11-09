var names = [
    "Oscar Wilde",
    "Eleanor Roosevelt",
    "George Eliot",
    "Alexandre Dumas-fils",
    "Oscar Wilde",
    "John Green",
    "Audrey Hepburn"
];


var texts = [
    "Be yourself; everyone else is already taken.",
    "Do one thing every day that scares you.",
    "It is never too late to be what you might have been.",
    "The difference between genius and stupidity is: genius has its limits.",
    "We are all in the gutter, but some of us are looking at the stars.",
    "Some infinities are bigger than other infinities.",
    "Nothing is impossible, the word itself says 'I'm possible'!"
];


var usedIndexes = [];


function randomQuote() {

    var num;

    do {
        num = Math.floor(Math.random() * names.length);
    } 
    while (usedIndexes.includes(num));

    usedIndexes.push(num);



    var quote = `"${texts[num]}"<br><br>― ${names[num]}`;
    
    document.getElementById("quote").innerHTML = quote;



    if (usedIndexes.length === names.length) {
        usedIndexes = [];
    }
}



