// Closure - A closure is created when a function “remembers” the variables from its outer (enclosing) scope, even after that outer function has finished executing.A closure gives you access to a function’s outer scope from inside an inner function, even after the outer function has returned.

function outerFn() {
  let outerVar = "I am outside!";

  function innerFn() {
    console.log(outerVar);
  }
  return innerFn;
}

const closure = outerFn();
closure();
// ---------------------------------------
// Closure Example - 2

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();
// ====================================