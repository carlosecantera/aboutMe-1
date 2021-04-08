'use strict'

let userName = prompt('Please Enter your Name!')

// console.log(userName)

alert('Welcome, ' +userName+ ' , I hope you enjoy the site!')

let avage = prompt('What is my age?')

if (avage === '27') {
  alert('That\'s right!')
}

else {
  alert('Wrong! Try Again!')
}

let avcity = prompt('What city did I grow up in?')

if (avcity === 'Birmingham') {
  alert('That\'s right!')
}

else {
  alert('Wrong! Try Again!')
}
let avbranch = prompt('What branch of the military did I serve in?')

if (avbranch === 'navy') { 
  alert('That\'s right!')
}

else {
  alert('Wrong! Try Again!')
}
let avfavsport = prompt('What is my favorite sport?')


if (avfavsport === 'football') {
  alert('That\'s right!')
}

else {
  alert('Wrong! Try Again!')
}

let avuabMascot = prompt('Do you know what UAB\'s mascot is? Great! Enter below!')

let lowercaseavuabMascot = avuabMascot.toLowerCase()

// console.log(lowercaseavuabMascot, 'This is the lowercase version')

if (lowercaseavuabMascot === 'blazers') {
  alert('That\'s right! UAB Blazers! Go Blazers!')
}

else {
  alert('Wrong! Try Again!')
}