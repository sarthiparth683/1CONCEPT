// What is Hoisting?
// Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (before code execution). Variables and functions are “hoisted” (lifted) to the top of their scope — but only their declarations(names), not their initializations (values).
// function declarations are hoisted before variable declarations.
// ---------------------------------------------------------------------------------------------------------------------------------
// The Golden Rule of Lexical Scope - Inner functions can access variables from their outer (parent) functions, but outer functions cannot access variables from their inner functions.
// ----------------------------------------------------------------------------------------------------------------------------------
console.log(a); // Output: undefined
var a = 10;
//  So `a` exists when `console.log` runs, but it has the default value `undefined`.
// ------------------------------------------------------------------------------------------------------------------------------
// Example with `let` and `const`

// console.log(b); // ❌ ReferenceError
// let b = 20;
// console.log(c); // ❌ ReferenceError
// const c = 30;

// Explanation-`let` and `const` are also hoisted, but they are in a “temporal dead zone (TDZ)” — meaning they can’t be accessed before their declaration line. Accessing them before declaration causes a ReferenceError.
// -------------------------------------------------------------------------------------------------------------------------------
// Function declarations are fully hoisted (both the name and body).But function expressions are not hoisted the same way:-

// Function declarations Hoisting
sayHello();
function sayHello() {
  console.log("Hello!");
}
// -------------------------------------------
// // Function Expression Hoisting 
// greet(); // ❌ TypeError: greet is not a function
// var greet = () => {
//   console.log("Hi!");
// };
// -------------------------------------------------------------------------------------------------------------------------------
// ### Summary Table

// | Type                 | Hoisted? | Initialized?     | Accessible Before Declaration? |
// | -------------------- | -------- | ---------------- | ------------------------------ |
// | `var`                | ✅ Yes    | ❌ No (undefined) | ✅ Yes (undefined)              |
// | `let`                | ✅ Yes    | ❌ No             | ❌ No (TDZ)                     |
// | `const`              | ✅ Yes    | ❌ No             | ❌ No (TDZ)                     |
// | Function Declaration | ✅ Yes    | ✅ Yes            | ✅ Yes                          |

// ------------------------------------------------------------------------------------------------------------------------------
