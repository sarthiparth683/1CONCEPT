// --------------------------------------------------------------------------------------------
// Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope (before code execution). Variables and functions are “hoisted” (lifted) to the top of their scope — but only their declarations, not their initializations (values).
//  Example with `var`

// console.log(a); // Output: undefined
// var a = 10;
// //  So `a` exists when `console.log` runs, but it has the default value `undefined`.
// // ----------------------
// // Example with `let` and `const`
// console.log(b); // ❌ ReferenceError
// let b = 20;
// console.log(c); // ❌ ReferenceError
// const c = 30;

// Explanation-`let` and `const` are also hoisted, but they are in a “temporal dead zone (TDZ)” — meaning they can’t be accessed before their declaration line. Accessing them before declaration causes a ReferenceError.
// ----------------------------------------------------------------------------------------------------------------
//  Function declarations are fully hoisted (both the name and body).But function expressions are not hoisted the same way:-

// Function declarations Hoisting

sayHello(); // ✅ Works fine
function sayHello() {
  console.log("Hello!");
}

// Function Expression Hoisting 
greet(); // ❌ TypeError: greet is not a function
var greet = () => {
  console.log("Hi!");
};

// -----------------------------------------------------------------------------------------------------------------------

// ### Summary Table

// | Type                 | Hoisted? | Initialized?     | Accessible Before Declaration? |
// | -------------------- | -------- | ---------------- | ------------------------------ |
// | `var`                | ✅ Yes    | ❌ No (undefined) | ✅ Yes (undefined)              |
// | `let`                | ✅ Yes    | ❌ No             | ❌ No (TDZ)                     |
// | `const`              | ✅ Yes    | ❌ No             | ❌ No (TDZ)                     |
// | Function Declaration | ✅ Yes    | ✅ Yes            | ✅ Yes                          |

// ------------------------------------------------------------------------------------------------------------------------------

// ### Interview answer

// "Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope during the compilation phase. However, only `var` is initialized with `undefined`, while `let` and `const` remain in the temporal dead zone until their declaration line is reached."
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
