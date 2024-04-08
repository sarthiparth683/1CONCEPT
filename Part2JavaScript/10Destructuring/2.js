// Objects: Allows you to extract properties from objects into variables.  
const person = { name: 'John', age: 30 };
const { name, age } = person;


// Arrays: Extracts items from arrays.  
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor] = colors;

// Renaming: You can rename variables while destructuring.  
const { name: personName } = person;
