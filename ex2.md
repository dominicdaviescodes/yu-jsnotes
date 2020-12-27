this featured concatenation and string.length

write a simple program that prompts user to enter a message (max 140 characters).  Return a string like this:

You have written 6 characters, you have 134 characters left.

My solution:

```js
// prompt user to enter paragraph
var input = prompt('Enter tweet (max 140 characters)');
// check number of characters entered
var entered = input.length;
// alert to user number of characters written and number remaining
var total = 140 - input.length;
alert('You have written ' + entered + ' characters, you have ' + total + ' characters left.')

```

```js
// instructors solution
var tweet = prompt('compose your tweet:');
var tweetCount = tweet.length;
alert(
  'You have written ' +
    tweetCount +
    ' characters, you have ' +
    (140 - tweetCount) +
    ' characters left.'
);
```
shorter solution:
```js
// instructors solution 2
var tweet = prompt('compose your tweet:');
alert(
  'You have written ' +
    tweet.length +
    ' characters, you have ' +
    (140 - tweet.length) +
    ' characters left.'
);
```