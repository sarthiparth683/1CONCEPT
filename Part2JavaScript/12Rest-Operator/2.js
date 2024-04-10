// Rest Parameter:
// What is the purpose of the rest parameter (...) in ES6 function parameters? How does it allow functions to accept an indefinite number of arguments, and how would you use it in practice? Provide an example demonstrating its usage.

// Rest Parameter: ◦ The rest parameter (...) in ES6 allows functions to accept an indefinite number of arguments as an array. It collects all the remaining arguments into a single array parameter, making it easier to work with variable numbers of arguments. Here's an example:
`function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10`























// Rest Operator (...)
// Explanation: The rest operator allows you to represent an indefinite number of elements as an array. It's often used in function parameters.

let color1 = "red, green , yellow , blue";
let color2 = ["red", "green" , "yellow" , "blue"];
let color3 = {
  name1:"red",
  name2:"blue",
  name3:"green"
};
// console.log(...color1);
console.log(...color2);
// console.log(...color3);


