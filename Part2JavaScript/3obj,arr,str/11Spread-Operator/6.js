// Spread Operator
// The spread operator in JavaScript allows us to expand an array or object in place. It is like unpacking a suitcase and placing its contents separately.

// For example, let's say you have an array of numbers and want to pass each number as separate arguments to a function. You can use the spread operator to achieve this.

let numbers = [1, 2, 3, 4, 5];
console.log({...numbers});
console.log([...numbers]);
// Output: 1 2 3 4 5
