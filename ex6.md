How many bottles of milk are you able to buy if you have £10?

my solution:

```js
function getMilk(money) {
  var milkCost = 1;
  var totalMilk = money / milkCost;
  console.log(totalMilk)
}

getMilk(10);
```

issues
* works for whole numbers eg £10 buy 10 bottles
* what about £0.90p buys 0.9 bottles
* and £15.50 buys 15.5 bottles
* will need to round down.

Instructor code

```js
function getMilk(money) {
  // money / cost of a bottle of milk
  var totalMilk = Math.floor(money / 1.5);
  console.log(totalMilk);
}

getMilk(5);
// 3 bottles.
```