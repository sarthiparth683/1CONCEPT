// Destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(rest);

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
