//Challenge 1: Your Age in Days

function ageInDays() {
  var birthYear = prompt('What year were you born... Good friend?');
  var ageInDayss = (2020 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays',).remove();
}
 
//Challenge 2: Rock,Paper,Scissors
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice: ', botChoice);
   results = decideWinner(humanChoice,botChoice); // [0,1] human lost | bot won
   console.log(results);

   message = finalMessage(results); // {message: 'You won!', 'color': 'green'}
   console.log(message);
   rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
 return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
  return ['rock', 'paper', 'scissors'] [number];
}

function decideWinner(yourChoice,computerChoice) {
   var rpsDataBase = {
     'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
     'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
     'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0},
   }

   var yourScore = rpsDataBase[yourChoice][computerChoice];
   var computerScore = rpsDataBase[computerChoice][yourChoice];

   return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
  if (yourScore === 0) {
    return {'message':'You Lost!', 'color': 'red'};
  }else if (yourScore === 0.5) {
    return {'message': 'Draw!', 'color': 'yellow'};
  }else {
    return {'message': 'You Won!', 'color': 'green'};
  }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage) {
  var imagesDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  // Let's remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rbga(37, 50, 233,1);'>"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDataBase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rbga(243, 38, 24 ,1);'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(messageDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);

  }

// Challenge 3: Magic 8 Ball

function shake(){ 
  var responses = ["Sure", "Yes, of course", "Yes", "No", "Of course not", "Sorry, no", "Of course", "Definetly not"]; 
   
    var randomNumber = Math.floor(Math.random()*8); 
   
    var display = document.getElementById("display"); 
    display.innerHTML = responses[randomNumber]; 
 }



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  myGamePiece.gravity = 0.05;
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.start();
}

//Feedback
function myResponse(){
  prompt("What is your feedback?");
   alert ("Thanks for your feedback!");
}      
 
// Challenge 4: Change the Color of All Buttons
let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

let copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green') {
    buttonsGreen();
  } else if (buttonThingy.value === 'yellow') {
    buttonsYellow();
  } else if (buttonThingy.value === 'blue') {
    buttonsBlue();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random') {
    randomColors();
  }
}

function buttonsRed() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonsYellow() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-warning');
  }
}

function buttonsBlue() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-primary');
  }
}

function buttonColorReset() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (let i=0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}