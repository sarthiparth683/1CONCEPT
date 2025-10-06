// ------------------------------------------------------------
// ## Function declarations vs. function expression

// <!-- Function Declaration -->
// function greet(){
//     return "hello";
// }

// console.log(greet());

// <!-- Function Expression -->
// const greet = function(){
//     return "hello";
// }
// console.log(greet());

// Difference:
// - Function declarations are hoisted
// - Function expressions are not hoisted
// ------------------------------------------------------------
// ------------------------------------------------------------
// Parameters vs Arguments

// function greet(name) {
//  console.log("Hello " + name);
// }
// greet("Harsh");  // function call

// name is a parameter
// "Harsh" is the argument you pass
// ---------------------------------------------------------

// Return Values

// function sum(a, b) {
//  return a + b;
// }

// let total = sum(5, 10); // total is 15

// return sends back a result to wherever the function was called
// After return , function exits
// --------------------------------------------------------

// Arrow Functions

// const greet = () => {
//  console.log("Hi!");
// };

// ## Arrow functions dont have their own `this` - They use (or “inherit”) the this value from the surrounding scope where they were created.inside an object don’t use arrow functions for methods that rely on this.

const user = {
  name: "Alice",
  showName: () => {
    console.log(this.name); // ❌ undefined due to arrow function
  }, 
  showName2: function () {
    console.log("Name 2", this.name);
  },
};

user.showName();
user.showName2();

// -----------------------------------------------------

// Default + Rest + Spread

// function multiply(a = 1, b = 1) {
//  return a * b;
// }

// function sum(...nums) {
//  return nums.reduce((acc, val) => acc + val, 0);
// }

// let nums = [1, 2, 3];
// console.log(sum(...nums)); // Spread

// a = 1 → default parameter
// ...nums → rest parameter
// ...nums (in call) → spread operator

// ----------------------------------------------------------
// Closures & Lexical Scope
// Closures = when a function remembers its parent scope, even after the parent has finished.

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let counter = outer();
// counter(); // 1
// counter(); // 2

// Even after outer is done, counter still remembers count .
// ---------------------------------------------------------

// IIFE – Immediately Invoked Function Expression

// (function () {
//  console.log("Runs immediately");
// })();

// Used to create private scope instantly.

// ---------------------------------------------------------
