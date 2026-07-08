// # HOF - (Higher Order Function) - Functions that accept other functions or return functions.
// ---------------------------------------------------------------------------------
// Map - iterate over each item  return a new array
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map((num) => {
  // return num;
  // return num * num;
  // return num * 2;
  // return num + 1;
  return num / 2;
});

console.log(squared);
//------------------------------------------------------------------------------
var sweets = ["kova", "gulabjamun", "laddu", "mysorepak", "badshaw"];

var output1 = sweets.map((el) => el);
console.log(output1);

var output2 = sweets.map((el, i) => {
  return el.concat(sweets[i + 1]);
});
console.log(output2);

var output3 = sweets.map((el, i) => {
  return el.split("");
});
console.log(output3);

var output4 = sweets.map((el, i) => {
  return el.toUpperCase();
});
console.log(output4);

var output5 = sweets.map((el, i) => {
  return el.toLowerCase();
});
console.log(output5);

var output6 = sweets.map((el, i) => {
  return el.slice(0, 2);
});
console.log(output6);

var output7 = sweets.map((el, i) => {
  return el.indexOf("a");
});
console.log(output7);

var output8 = sweets.map((el, i) => {
  return el.replace("a", "9-8");
});
console.log(output8);
//-------------------------------------------------------------------------------------------
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

let user1 = users.map((el, i) => {
  // return el;
  // return el.name;
  return el.age;
});
console.log(user1);
//----------------------------------------------------------------------------------------
