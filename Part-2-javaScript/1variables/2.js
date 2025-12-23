// Difference between var, let and const

// var- Scope-Function,  Re-declare-yes,  Re-assign-yes, Hoisted-yes(initialized as undefined)
// let- Scope-Block, Re-declare-No, Re-assign-yes, Hoisted-yes(TDZ)
// const- Scope-Block,Re-declare-No, Re-assign-No, Hoisted-yes(TDZ)

// ------------------------------------------------------------------------------------------------------
// // var – functional scoped/global, - reassignment -> yes - Hoisting -> yes, A global scope variable. Scoped to functions, not a block scope,  Can be redeclared and reassigned, Hoisted to the top with undefined value.
// function run() {
//   var num = 87;
//   console.log(num);
// }
// run()
// // console.log(num); // Error: since var is funciton scope
// // ------------------------
// var score = 10;
// var score = 20;
// ------------------------------------------------------------------------------------------------------
// //  let – block scope, - reassignment -> yes - Hoisting -> Yes but temporal dead zone, Scoped to blocks ( {} ), Can be reassigned but not redeclared,  Hoisted, but stays in the Temporal Dead Zone (TDZ) Variable cannot be re-declared but can be updated. A block scope variable.
// let age = 25;
// age = 30; // ✅
// // let age = 40; // ❌ Error (same block)
// ------------------------------------------------------------------------------------------------------
// // const –  block scoped - No reassignment - Hoisting -> Yes but temporal dead zone, Scoped to blocks, Cannot be reassigned or redeclared, Value must be assigned at declaration, TDZ applies here too.Variable cannot be re-declared or updated. A block scope variable.

// const PI = 3.14;
// // PI = 3.14159; // ❌ Error

// //  But: If const holds an object/array, you can still change its contents: const only prevents reassignment of the variable name — it does not make objects immutable.
// const student = { name: "Riya" };
// student.name = "Priya"; // ✅ OK
// console.log(student);
// ------------------------------------------------------------------------------------------------------
// // let and const follow block scope. var ignores block scope — which leads to bugs.

// {
//   var x = 5;
//   let y = 10;
//   const z = 15;
// }
// console.log(x); // ✅ 5
// // console.log(y); // ❌ ReferenceError
// // console.log(z); // ❌ ReferenceError
// =============================================================================
// ==========================
// console.log("test")
