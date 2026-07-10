//  Lexical Scope defines the boundary: When you define a function inside another function, the inner function "sees" the variables in the outer function because of its lexical position.

//The Closure enables the "persistence": Normally, when a function finishes executing, its local variables are removed from memory (garbage collected). However, if an inner function is returned and stored (e.g., in a variable), it holds a reference to that outer scope. This "hold" prevents the variables from being deleted.

function createGreeting(greeting) {
  return function (name) {
    // The inner function has access to the 'greeting' variable
    // from the outer function's scope.
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

sayHello("Alice"); // Output: Hello, Alice!
sayHi("Bob"); // Output: Hi, Bob!
// ========================================================================

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