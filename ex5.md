## Write a dog age to human age converter
How old would your dog be if it was a human?

* enter dog age
* (dogAge -2) x 4 + 21;
* alert('Your dog is ' + + ' human years old')

```js
//  enter dog age
var dogAge = prompt('Enter dog age');
humanAge = ((dogAge -2) * 4) + 21; 
alert('Your dog is ' + humanAge + ' human years old')
```

also saw a cool solution in the Q+A

it looks like you want to convert the string "12 years" to the number 12, right? I guess the replace function works best here. And it would be nice to know basics about regular expressions in this case.

```js
    var theString = "12 years"
    theString.replace(/[^0-9]/g,''); // This turns every character that is not a digit into an empty string. 
    console.log(theString) // would log "12" then. 
```