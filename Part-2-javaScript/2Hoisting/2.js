// --------------------------------------------------------------------------------------------
// # Hoisting
// - Hoisting is js default behaviour 
// - moving declarations (variable and functions)
// - To the top of their scope (global/function or block scope)



// - Execute the code
//     - Creation phase (memory allocation)
//         - js engine scans the allocated memory for variables and functions
//     - Execution phase
//         - line by line
//         - values are assigned and function are called

// JavaScript prepares memory before running code., It moves all declarations to the top — this is called hoisting., var is hoisted and set to undefined,
// let and const are hoisted but not initialized — so accessing them early gives, ReferenceError
// -------------------------------------------------------------------------------------------------
console.log(a); // undefined
var a = 10;

// --------------------------------------------------------------------------------------------------------
console.log(b); // ❌ ReferenceError
let b = 20;

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------