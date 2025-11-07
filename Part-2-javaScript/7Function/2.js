// ------------------------------------------------------------
// ## Function declarations vs. function expression

// Function Declaration
// function greet() {
//   return "Function Declaration";
// }
// console.log(greet());

//  Function Expression or Arrow Function
// const greet = () => {
//   return "Function Expression";
// };
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
// greet("Sarthi");  // function call

// name is a parameter
// "Sarthi" is the argument you pass
// ---------------------------------------------------------
// Return Values
// function sum(a, b) {
//   return a + b;
// }
// let total = sum(5, 10);
// console.log(total); // total is 15
// return sends back a result to wherever the function was called
// After return , function exits
// --------------------------------------------------------
// Arrow Functions
// What are arrow function and when should you use them?
// const greet = () => {
//  console.log("Hi!");
// };

// Arrow functions dont have their own `this` - They use (or “inherit”) the this value from the surrounding scope where they were created.inside an object don’t use arrow functions for methods that rely on "this".

// const user = {
//   name: "Alice",
//   showName: () => {
//     console.log(this.name); // ❌ undefined due to arrow function
//   },
//   showName2: function () {
//     console.log("Name 2", this.name);
//   },
// };

// user.showName();
// user.showName2();
// -----------------------------------------------------
// IIFE – Immediately Invoked Function Expression
// (function () {
//  console.log("Runs immediately");
// })();

// Used to create private scope instantly.
// ---------------------------------------------------------
// Closures & Lexical Scope - in both case inner function remembers outer funciton scope but the way to write the code is different
//-------------------------------------
// Lexical Scope, also called static scope, is a scoping mechanism where a function's access to variables is determined by where the function is defined in the source code. Inner functions have access to variables in their outer (enclosing) functions, forming a scope chain that is established at compile/parse time, not execution time.
// inner function access outer function
let name = "Alice";
function outer() {
  let age = 25;
  function inner() {
    // inner can access both 'age' and 'name'
    console.log(name); // "Alice" - from global scope
    console.log(age);  // 25 - from outer function
  }
  inner();
}
outer();
// inner looks in its own scope first, then outer's scope, then the global scope.


// -------------------------------------------------------------
// Closures = when a function remembers its parent scope, even after the parent has finished executing.
// returns functions
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// outer() // This runs outer() but discards the returned function
// outer() // This runs outer() but discards the returned function

// Even though outer has finished running, the returned function still has access to count. The inner function "closes over" the variable.
// ---------------------------------------------------------
