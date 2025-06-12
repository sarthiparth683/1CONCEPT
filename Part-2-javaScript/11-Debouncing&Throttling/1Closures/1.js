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