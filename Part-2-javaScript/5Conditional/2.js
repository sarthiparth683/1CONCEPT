// Loose vs Strict Equality
// == compares value with type conversion
// === compares value + type (no conversion)

// console.log(5 == "5") // true
// console.log(5 === "5") // false
// ----------------------------------------------------
// NaN – Not a Number
// console.log(typeof NaN) // "number"
// ----------------------------------------------------------
// Truthy and Falsy Values
// Falsy values: false , 0 , "" , null , undefined , NaN
// Everything else is truthy, including: "0" , "false" , [] , {} , function(){}
// -----------------------------------------------------------------
// console.log(null + 1); // 1
// console.log("5" + 3); // 53
// console.log("5" - 3); // 2
// console.log(true + false); //1
// -----------------------------------------------------------------
// console.log(typeof []); // object
// console.log(typeof null); // object
// console.log(typeof 123n); // object
// -----------------------------------------------------------------
// console.log(Boolean(0)); // falsy
// console.log(Boolean("0")); // truthy
// console.log(Boolean([])); // truthy
// console.log(Boolean(undefined)); // falsy
// -----------------------------------------------------------------
// function equalTo(x, y) {
//   let sum = x + y;
//   if (sum > 5) {
//     console.log("Above 5");
//   } else if (sum < 5) {
//     console.log("Below 5");
//   } else {
//     console.log("Equal 5");
//   }
//   console.log(sum);
// }
// equalTo(2, 35);
//-----------------------------------------------
// function logicalEvens(one, two) {
//   let x = one % 2 == 0;
//   let y = two % 2 == 0;
//   if (x && y) {
//     console.log("Both are true");
//   } else {
//     console.log("False Value");
//   }
//   console.log("logical events",one % 5);
// }
// logicalEvens(14, 8);