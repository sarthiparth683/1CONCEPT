//  difference between rest operator and spread operator in js
// Rest Operator: Like picking up leftover ingredients and putting them all in one basket.
// Spread Operator: Like taking ingredients out of a basket and placing them on individual plates.


// Captures an indefinite number of arguments passed to a function and combines them into an array.
// Example:Rest Operator
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 7, 8, 9));
// Output: 10



// Spread Operator - Scatters elements.
// Example:
const numbers = [1, 2, 3];
const copy = [...numbers, 4, 5]; // Creates a new array with spread and additional elements

console.log(copy); // Output: [1, 2, 3, 4, 5]







































