Improve on the twitter app
* remove the extra characters.
* alert the tweet with 140 characters


```js
var tweet = prompt('enter tweet');
alert(tweet.slice(0, 140));
```

and a shorter solution

```js

alert(prompt('enter tweet').slice(0, 140));
```






