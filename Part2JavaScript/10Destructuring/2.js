// Objects: Allows you to extract properties from objects into variables.  
// const person = { name: 'John', age: 30 };
// const { one, two } = person;
// console.log(two );

// Arrays: Extracts items from arrays.  
const colors = ['red', 'green', 'blue'];
const [asd,one, secondColor] = colors;
console.log(asd);

// Renaming: You can rename variables while destructuring.  
const { name: personName } = person;
 