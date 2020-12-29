// Ex7

// instructor solution

function lifeInWeeks(age) {
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

console.log('You have ' + days + ', ' + weeks + ' weeks, and ' + months + ' months left');
}
lifeInWeeks(56);

// function lifeInWeeks(age) {

//   var days = (90 - age) * 365;
//   var weeks = (90 - age) * 52;
//   var months = (90 - age) * 12;
//   console.log('You have ' + days + ', ' + weeks + ' weeks, and ' + months + ' months left');
// }

// lifeInWeeks(56);



//L119
// How many bottles of milk are you able to buy if you have £10?

// function getMilk(money) {
//   var milkCost = 1;
//   var totalMilk = money / milkCost;
//   console.log(totalMilk)
// }

// getMilk(10);

// function getMilk(money) {
  // money / cost of a bottle of milk
//   var totalMilk = Math.floor(money / 1.5);
//   console.log(totalMilk);
// }

// getMilk(5);

// round down js
// Math.floor();
// L113
//  enter dog age
// var dogAge = prompt('Enter dog age');
// humanAge = ((dogAge -2) * 4) + 21;
// alert('Your dog is ' + humanAge + ' human years old')

// practise ex4 29/12/2020AM
// what is your name? store in a var
// var firstName = prompt('enter name');
// capitalize 1st letter
// var firstChar = firstName.slice(0,1).toUpperCase();
// console.log(firstChar)
// get restOfName
// var restOfName = firstName.slice(1, firstName.length);
// fullName = firstChar + restOfName.toLowerCase();
// put name together

// greet user with capitalized version of their name regardless of how they typed it

// alert('Welcome ' + fullName)

// practise ex3 29/12/2020AM

// var tweet = prompt('enter tweet');
// alert(tweet.slice(0, 140));

// practise ex2 29/12/2020AM

// var tweet = prompt('enter tweet');
// var tweetMax = tweet.length;
// var tweetLeft = 140 - tweetMax;
// alert(
//   'you have written ' +
//     tweet.length +
//     ' characters, you have ' +
//     (140 -
//     tweet.length) +
//     ' characters left'
// );

//You have written 6 characters, you have 134 characters left.

//L111

// instructor solution
// var firstName = prompt('Enter Name');
// isolate 1st char
// var firstChar = firstName.slice(0,1);
// turn to uppercase
// var firstCharUp = firstChar.toUpperCase();
// isolate rest of name
// var restOfName = firstName.slice(1,firstName.length)

// convert to rest of name to lowercase
// restOfName = restOfName.toLowerCase();
// capitalize name
// var capName = firstCharUp + restOfName;
// concat and alert whole name
// alert('hello ' + capName)

// what is your name
// var firstName = prompt('Enter Name');
// whatever is returned by user we alert back with 1st letter capitalized
// var firstLetter = firstName.slice(0, 1);
// var firstLetterUp = firstLetter.toUpperCase();
// alert(firstLetterUp);
// add 1st letter to rest of str

// var restOfName = firstName.slice(1, firstName.length);
// restOfName = restOfName.toLowerCase();
// alert('Welcome ' + firstLetterUp + restOfName);
// L110 tweet

// var tweet = prompt('enter tweet');

// alert(tweet.slice(0, 140));
// alert(prompt('enter tweet').slice(0, 140));

// Ex3
// var firstName = 'Angela';

// want 1st character?

// console.log(firstName.slice(0,1))
// A

// want 1st 4?
// console.log(firstName.slice(0, 4));
// Ange

// want characters upto pos 3?
// 3 -0 = 3 so you'll get 3 characters
// console.log(firstName.slice(0,3));
// Ang

// want last char at pos 5?
// 6-5 = 1 character
// console.log(firstName.slice(5,6));
// a

// Ex2
// instructors solution 2
// var tweet = prompt('compose your tweet:');
// alert(
//   'You have written ' +
//     tweet.length +
//     ' characters, you have ' +
//     (140 - tweet.length) +
//     ' characters left.'
// );

// instructors solution 1
// var tweet = prompt('compose your tweet:');
// var tweetCount = tweet.length;
// alert(
//   'You have written ' +
//     tweetCount +
//     ' characters, you have ' +
//     (140 - tweetCount) +
//     ' characters left.'
// );

// mine
// prompt user to enter paragraph
// var input = prompt('Enter tweet (max 140 characters)');
// check number of characters entered
// var entered = input.length;
// alert to user number of characters written and number remaining
// var total = 140 - input.length;
// alert('You have written ' + entered + ' characters, you have ' + total + ' characters left.')

/////////////////////////////////////
// Lecture 103

// need to commit this to memory
// prompt('What is your name?');

// use a variable
// var yourName = prompt('What is your name?');

// alert('Hello ' + yourName);
