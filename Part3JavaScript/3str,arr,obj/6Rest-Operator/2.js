// Rest Parameter: ◦ The rest parameter (...) 
let color1 = "red, green , yellow , blue";
let color2 = ["red", "green", "yellow", "blue"];
let color3 = {
  name1: "red",
  name2: "blue",
  name3: "green", 
};
console.log(...color1);
console.log(...color2);
// console.log(...color3); // throws error
let color4 = {...color3};
console.log(color4);  // no error now

const obj = { a: 1, b: 2, c: 3 };
const newObj = { ...obj, b: 4 };
console.log(newObj);

