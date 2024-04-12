// Spread Operator (...)
// Explanation: The spread operator allows you to spread out elements of an array or properties of an object.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

function sum(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
sum(...[1, 2, 3]);

// x = 1
// y = 2
// z = 3 

