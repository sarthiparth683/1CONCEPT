// Destructuring

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const [first, second, third, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);
//--------------------------------------------------------------
// object destructuring: Allows you to extract properties from objects into variables.

// const person = { name: "John", age: 30, hobby: "sports" };
// const { name, age, hobby } = person;
// console.log(name);
// console.log(age);
// console.log(hobby);
//-------------------------------------------------------------
// Combining Arrays
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

const groceries = [...fruits, ...vegetables];
console.log(groceries);
