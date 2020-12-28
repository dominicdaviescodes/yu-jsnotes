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
