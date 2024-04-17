// Rest Parameter: ◦ The rest parameter (...) in ES6 allows functions to accept an indefinite number of arguments as an array. It collects all the remaining arguments into a single array parameter, making it easier to work with variable numbers of arguments. Here's an example:


let color1 = "red, green , yellow , blue";
let color2 = ["red", "green", "yellow", "blue"];
let color3 = {
  name1: "red",
  name2: "blue",
  name3: "green", 
};
console.log(...color1);
console.log(...color2);
console.log(...color3);



const obj = { a: 1, b: 2, c: 3 };
const newObj = { ...obj, b: 4 };
console.log(newObj);

