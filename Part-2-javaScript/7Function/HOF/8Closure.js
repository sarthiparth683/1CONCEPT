// ## Closure - A closure is created when a function “remembers” the variables from its outer (enclosing) scope, even after that outer function has finished executing.A closure gives you access to a function’s outer scope from inside an inner function, even after the outer function has returned.

// A inner function has access to the outer function variable
// - Varibales in its own scope
// - varibale in the outer function's scope
// - global bariables
// - Closures are created every time a function is created. at the function creation time.


// Closure Example - 1
function outerFn() {
  let outerVar = "I am outside!";

  function innerFn() {
    console.log(outerVar);
  }
  return innerFn;
}

const closure = outerFn();
closure();
// ----------------------------------------------------------------------------------------

// function outerFn() {
//   let outerVar = "I am outside!";

//   function innerFn() {
//     console.log(outerVar);
//   }
//   return innerFn;
// }

// const closure = outerFn()();
// --------------------------------
// Closure Example - 2
function outer() {
  let count = 0; // variable in outer scope

  function inner() {
    count++; 
    console.log(count);
  }

  return inner; // returning the inner function
}

const counter = outer();  // outer() runs, and returns inner()
counter(); // 1
counter(); // 2
counter(); // 3




