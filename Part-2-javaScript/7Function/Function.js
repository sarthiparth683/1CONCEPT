// ------------------------------------------------------------
// ## Function declarations vs. function expression
// Difference:
// - Function declarations are hoisted
// - Function expressions are not hoisted

// Function Declaration
function greet() {
  return "Function Declaration";
}
console.log(greet());

//  Function Expression or Arrow Function
const greet2 = () => {
  return "Function Expression";
};
console.log(greet2());
// ------------------------------------------------------------
// Parameters vs Arguments

function greet3(name) {
  // name is a parameter
  return "Hello " + name;
}

console.log(greet3("Sarthi")); // function call // "Sarthi" is the argument you pass
// ---------------------------------------------------------
// Arrow functions

const greet4 = () => {
  return "Greet-4";
};
console.log(greet4());

// Arrow functions dont have their own `this` - They use (or “inherit”) the this value from the surrounding scope where they were created.inside an object don’t use arrow functions for methods that rely on "this".

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
// IIFE – Immediately Invoked Function Expression.Used to create private scope instantly.

(function () {
  console.log("Runs immediately");
})();
// ---------------------------------------------------------
// Closures & Lexical Scope - in both case inner function remembers outer funciton scope but the way to write the code is different.

// Lexical Scope, also called static scope, Inner functions have access to variables in their outer (enclosing) functions, forming a scope chain that is established at compile/parse time, not execution time.

let name = "Alice";
function outer() {
  let age = 25;
  function inner() {
    console.log(name);
    console.log(age);
    let inside = "inside";
  }
  inner();
  //   console.log(inside); // inside is not defined
}
outer();

// inner looks in its own scope first, then outer's scope, then the global scope.
// -----------------------------------------------------------------------------------
// What is a Closure?
// Definition: A closure is formed when a function is defined within another function, allowing the inner function to access the outer function's variables and scope.When a function is executed in JavaScript, it creates an execution context, including variables and scope.The inner function retains references to the outer function's variables, thanks to closure.Inner functions have access to the variables of their outer functions, forming the basis of closure.Variables used by inner functions persist even after the execution of the outer function.
// Closures = when a function remembers its parent scope, even after the parent has finished executing.

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter();
counter();
counter();
outer(); // This runs outer() but discards the returned function
outer(); // This runs outer() but discards the returned function

// Even though outer has finished running, the returned function still has access to count. The inner function "closes over" the variable.
// -----------------------------------------------------------------------------------------------
function greet() {
  let name = "Tom";
  return function () {
    console.log(name);
  };
}

let output = greet();
output();
//-------------------------------------------------------------------------------
