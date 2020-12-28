* what is your name? store in a var
* capitalize 1st letter
* greet user with capitalized version of their name regardless of how they typed it


## my solution

```js
// what is your name
var firstName = prompt('Enter Name');
// whatever is returned by user we alert back with 1st letter capitalized
var firstLetter = firstName.slice(0, 1);
var firstLetterUp = firstLetter.toUpperCase();
// alert(firstLetterUp);
// add 1st letter to rest of str

var restOfName = firstName.slice(1, firstName.length);
restOfName = restOfName.toLowerCase();
alert('Welcome ' + firstLetterUp + restOfName);
```

### Instructor version

```js
// instructor solution
var firstName = prompt('Enter Name');
// isolate 1st char
var firstChar = firstName.slice(0,1);
// turn to uppercase
var firstCharUp = firstChar.toUpperCase();
// isolate rest of name
var restOfName = firstName.slice(1,firstName.length)
// convert to rest of name to lowercase
restOfName = restOfName.toLowerCase();
// capitalize name
var capName = firstCharUp + restOfName;
// concat and alert whole name
alert('hello ' + capName)
```