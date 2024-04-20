// Difference Between forEach, map, and reduce
// expand_less
// Understanding the difference between array methods like forEach, map, and reduce is key:
// forEach executes a provided function once for each array element, but doesn't return anything.
// map creates a new array with the results of calling a provided function on every element in the calling array.
// reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// Example
const numbers = [1, 2, 3, 4];
numbers.forEach(number => console.log(number));
const squared = numbers.map(number => number * number);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Outputs: 10