// ------------------------------------------------------------------------------------------------------
//  var – Old and risky, Scoped to functions, not a block scope,  Can be redeclared and reassigned, Hoisted to the top with undefined value.Variable can be re-declared & updated. A global scope variable.
var score = 10;
var score = 20;
// ------------------------------------------------------------------------------------------------------
//  let – Modern and safe, Scoped to blocks ( {} ), Can be reassigned but not redeclared,  Hoisted, but stays in the Temporal Dead Zone (TDZ) Variable cannot be re-declared but can be updated. A block scope variable.
let age = 25;
age = 30; // ✅
// let age = 40; // ❌ Error (same block)
// ------------------------------------------------------------------------------------------------------
// const – Constant values, Scoped to blocks, Cannot be reassigned or redeclared, Value must be assigned at declaration, TDZ applies here too.Variable cannot be re-declared or updated. A block scope variable.

const PI = 3.14;
// PI = 3.14159; // ❌ Error

//  But: If const holds an object/array, you can still change its contents:
const student = { name: "Riya" };
student.name = "Priya"; // ✅ OK
student = {};
// ------------------------------------------------------------------------------------------------------
// let and const follow block scope.var ignores block scope — which leads to bugs.

{
  var x = 5;
  let y = 10;
  const z = 15;
}
console.log(x); // ✅ 5
// console.log(y); // ❌ ReferenceError
// console.log(z); // ❌ ReferenceError
