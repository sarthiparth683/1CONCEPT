//  Variables are containers that hold data. They help us store, reuse, and update information in JavaScript — from simple values like numbers to complex data like arrays and objects.
// Variable names are case sensitive; “a” & “A” is different.
//  Only letters, digits, underscore( _ ) and dollar($) symbol is allowed. (not even space)
//  Only a letter, underscore( _ ) or $ should be 1st character.
// ==================================================================================================
// Difference between var, let and const
// var- Function-scoped,  Re-declare-yes,  Re-assign-yes, Hoisted-yes(initialized as undefined)
// let- Block-scope, Re-declare-No, Re-assign-yes, Hoisted-yes(TDZ)
// const- Block-scope, Re-declare-No, Re-assign-No, Hoisted-yes(TDZ)
// ---------------------------------------------------------------------------------------------------
function run() {
  var num = 87;
  console.log(num);
}

run()
// console.log(num); // Error: since var is funciton scope
// -----------------------------------------------------------------------------------------------------
let age = 25;
age = 30; 
// let age = 40; // ❌ Error (same block)
console.log(age);
// -----------------------------------------------------------------------------------------------------
const PI = 3.14;
// PI = 3.14159; // ❌ Error

//  But: If const holds an object/array, you can still change its contents: const only prevents reassignment of the variable name — it does not make objects immutable.
const student = { name: "Riya" };
student.name = "Priya"; 
console.log(student);
// -----------------------------------------------------------------------------------------------------