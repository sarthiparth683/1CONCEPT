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
// let name = "Alice";
// function outer() {
//   let age = 25;
//   function inner() {
//     // inner can access both 'age' and 'name'
//     console.log(name); // "Alice" - from global scope
//     console.log(age);  // 25 - from outer function
//   }
//   inner();
// }
// outer();
// inner looks in its own scope first, then outer's scope, then the global scope.


// -------------------------------------------------------------
// Closures = when a function remembers its parent scope, even after the parent has finished executing.
// returns functions
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
// counter(); // 3

// outer() // This runs outer() but discards the returned function
// outer() // This runs outer() but discards the returned function

// Even though outer has finished running, the returned function still has access to count. The inner function "closes over" the variable.
// ---------------------------------------------------------
// Closures in JavaScript are a powerful and fundamental concept that involves a function bundled together with references to its surrounding state or lexical environment. They allow a function to retain access to variables from its outer function even after the outer function has executed.
// Detailed Explanation
// What is a Closure?
// Definition: A closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and scope.When a function is executed in JavaScript, it creates an execution context, including variables and scope.The inner function retains references to the outer function's variables, thanks to closure.Inner functions have access to the variables of their outer functions, forming the basis of closure.Variables used by inner functions persist even after the execution of the outer function.
// Benefits of Closures:
// Privacy: Closures help in creating private variables which can prevent accidental changes from the outside code.
// Persistence: The variables in the closure hold their value and aren’t reset each time the function is called. Some Practical application in real world include debouncing throttling etc
// Understanding the Magic:
// The magic is in the concept of scope and environment. Even though createCounter has finished executing, the increment function still has access to count because it remembers its scope environment.
// Closures in JavaScript empower functions to retain access to their lexical environments.
//------------------------------------------------------------------------------
// function greet() {
//   let name = "Tom";
//   return function () {
//     console.log(name);
//   };
// }
// let output = greet();
// output();
//--------------------------------------------------------------------------------
// function createCounter() {
//   let count = 0; // a variable in the outer scope
//   function increment() {
//     count++;
//     console.log(count);
//   }
//   return increment;
// }

// let counter = createCounter();
// counter();
// counter();
// counter();
// counter();
// counter();
// We return increment from createCounter, and every time we call counter(), it remembers the value of count and increments it.
//---------------------------------------------------------------------------------
// function outerFunction() {
//     let x = 10;
//     function innerFunction() {
//         return x += 1;
//     };
//     return innerFunction;
// };
// let f1 = outerFunction();
// let f2 = outerFunction();
// console.log(f1());      //11
// console.log(f1());      //12
// console.log(f1());      //13
// console.log(f2());      //11
// console.log(f2());      //12
//-------------------------------------------------------------------------------
// function createCounter() {
//     let count = 0; // Private variable
//     return {
//         increment: function () {
//             count++;
//         },
//         getCount: function () {
//             return count;
//         }
//     };
// };
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // Output: 1
// console.log(counter.count); // Output: undefined (count is private)