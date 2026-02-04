# JavaScript Fundamentals

## JavaScript Execution Model

### Exercise: Predict the outcome of the following code

Try and understand the output before running it.
Explain why it runs in this order.

```javascript
console.log('A');

setTimeout(() => {
  console.log('B');

  Promise.resolve().then(() => {
    console.log('C');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('D');
});

(async function () {
  console.log('E');
  await Promise.resolve();
  console.log('F');
})();

console.log('G');
```

## Loops

## Exercise: For Loop

Write a for loop that:

1. Creates an array of the first 10 even numbers (2, 4, 6, 8, ...)
2. The calculates the sum of those numbers in a second loop
3. Finally, prints the array and the sum
