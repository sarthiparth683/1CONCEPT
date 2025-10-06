// Primitive Data Types stored directly.

// String → Text "hello" , 'Sarthi'
// Number → Any numeric value 3 , -99 , 3.14
// Boolean → True or false => true , false
// Undefined → Variable declared but not assigned let x; → x is undefined
// Null → Intentional empty value let x = null;
// Symbol → Unique identifier (rarely used)
// BigInt → Very large integers 123456789012345678901234567890n

// console.log(typeof "Sheryians"); // "string"
// console.log(typeof 99); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" ← known bug
// console.log(typeof 4896n); // bigint

// Note: typeof null === "object" is a bug, but has existed since the early days of JS.
// -------------------------------------------------------------------------

// Non-Primitive or Reference, Data Types – stored as memory references.

// Object → { name: "Harsh", age: 26 }
// Array → [10, 20, 30]
// Function → function greet() {}
// Dates
// Regular Expressions
// Any user-defined objects

// console.log(typeof {}); // "object"
// console.log(typeof []); // "object", array in console shows "object"
// console.log(typeof function () {}); // "function"
// -------------------------------------------------------------------------------

// Type Coercion (Auto-Conversion) - JavaScript auto-converts types in some operations:

// console.log("5" + 1); // "51" → number converted to string
// console.log("5" - 1); // 4 → string converted to number
// console.log(true + 1 + true); // 3
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
