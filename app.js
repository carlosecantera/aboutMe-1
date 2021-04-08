'use strict';
function userName1(){
  let userName = prompt('Please Enter your Name!');

  console.log(userName);

  alert('Welcome, ' +userName+ ' , I hope you enjoy the site!');
}
function avage1(){
  let avage = prompt('What is my age?');

  if (avage === '27') {
    alert('That\'s right! You\'re 1 for 1 so far!');
  }

  else {
    alert('Wrong! Try Again!');
  }
}
function avcity1(){
  let avcity = prompt('What city did I grow up in?');

  if (avcity === 'Birmingham') {
    alert('That\'s right!');
  }

  else {
    alert('Wrong! Try Again!');
  }
}
function avbranch1(){
  let avbranch = prompt('What branch of the military did I serve in?');

  if (avbranch === 'navy') {
    alert('That\'s right!');
  }

  else {
    alert('Wrong! Try Again!');
  }
}
function avfavsport1(){
  let avfavsport = prompt('What is my favorite sport?');

  if (avfavsport === 'football') {
    alert('That\'s right!');
  }

  else {
    alert('Wrong! Try Again!');
  }
}
function avUAB(){
  let avuabMascot = prompt('Do you know what UAB\'s mascot is? Great! Enter below!');

  let lowercaseavuabMascot = avuabMascot.toLowerCase();

  // console.log(lowercaseavuabMascot, 'This is the lowercase version')

  if (lowercaseavuabMascot === 'blazers') {
    alert('That\'s right! UAB Blazers! Go Blazers!');
  }

  else {
    alert('Wrong! Try Again!');
  }
}
function  guessingGame(){
  
  let guessingGameYesOrNo = prompt('Do you want to play a guessing game?');

  while (guessingGameYesOrNo.toLowerCase() === 'yes' || 'y' || 'yeah'){
        
    let correctAnswer = Math.floor(Math.random() * 100) + 1;
        
    let userGuess = prompt('Please enter a number 1-100');
        
    let numberofGuesses = 3;
  
    for(let i = 0; i < numberofGuesses; i++){
            
      let guessLeft = numberofGuesses - i;
         
      if(userGuess < correctAnswer){
            
        userGuess = prompt(guessLeft + ' Guesses left. To Low. Please enter a number 1-100');
      }
      if (userGuess > correctAnswer){
      
        userGuess = prompt(guessLeft + ' Guesses left. To High, Please enter a number 1-100');
      }
      if (guessLeft === 0){
        alert('Oh no! You ran out of guesses! The correct answer was ' +correctAnswer);
      }
      if (userGuess === correctAnswer){
        alert('You got it!');
        break;
      }
    }
  }
}

let avArray= ['Tarantino', 'Coen', 'Scorsese']

let avdirector= prompt('Who is my favorite Movie Director? Please only enter the last name.')

userName1();
avage1();
avcity1();
avbranch1();
avfavsport1();
avUAB();
