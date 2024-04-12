// Destructuring:
// Explain the concept of array and object destructuring in ES6. How does it simplify code compared to traditional variable assignment methods? Provide a scenario where destructuring can be particularly useful.

// Destructuring: ◦ Destructuring is a feature in ES6 that allows you to extract values from arrays or properties from objects and assign them to variables in a concise way. It simplifies code by reducing the need for repetitive variable assignment. For example:
// Array destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second,...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest)

  



























// Objects: Allows you to extract properties from objects into variables.  
// const person = { name: 'John', age: 30 };
// const { one, two } = person;
// console.log(two );

// Arrays: Extracts items from arrays.  
const colors = ['red', 'green', 'blue'];
const [asd, one, secondColor] = colors;
// console.log(asd);

// Renaming: You can rename variables while destructuring.  
const { name: personName } = person;
