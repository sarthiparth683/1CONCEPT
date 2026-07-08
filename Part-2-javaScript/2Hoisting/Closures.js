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
