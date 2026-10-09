//Variables
let quote = document.querySelector("p");
let button = document.querySelector("button");


//Logic

let quotations = [
  'Practice makes a man perfect',
  'Good things take time',
  'Action is the foundational key to all success',
  'Believe you can and you are halfway there',
  'Consistency is the key to mastery',
  'Do what you can with what you have where you are',
  'Every moment is a fresh beginning',
  'Focus on progress rather than perfection',
  'Great things never come from comfort zones',
  'Hard work beats talent when talent fails to work hard',
  'It always seems impossible until it is done',
  'Journey of a thousand miles begins with a single step',
  'Knowledge is power but enthusiasm pulls the switch',
  'Little by little one travels far',
  'Mindset is everything when chasing a goal',
  'Never regret anything that made you smile',
  'Opportunities do not happen you create them',
  'Patience is bitter but its fruit is sweet',
  'Quiet leadership speaks louder than loud words',
  'Risk comes from not knowing what you are doing'
];


const generateQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotations.length);
    quote.innerHTML = quotations[randomIndex];
};


//Event Listeners
button.addEventListener("click", generateQuote);