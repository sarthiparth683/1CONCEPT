// Primitive Data Types stored directly.

// String → "hello" , 'Sarthi'
// Number → 3 , -99 , 3.14
// Boolean → True or false
// Undefined → Variable declared but not assigned --- let x; → x is undefined
// Null → Intentional empty value let x = null;
// Symbol → Unique identifier (rarely used)
// BigInt → Very large integers - 123456789012345678901234567890n
// ----------------------------------------------------------------------
console.log(typeof "Sarthi");
console.log(typeof 99);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 4896n);

// Note: typeof null === "object" is a bug, but has existed since the early days of JS.
// -------------------------------------------------------------------------
// Non-Primitive or Reference Data Types – stored as memory references.

// Object → { name: "Harsh", age: 26 }
// Array → [10, 20, 30]
// Function → function greet() {}
// Dates
// Regular Expressions
// Map & Set
// Any user-defined objects
// ----------------------------------------------------------------------------
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

const now = new Date();
console.log(now.getFullYear());

const map = new Map();
map.set("key", "value");
map.set("name", "Sarthi");
console.log(map);

const set = new Set([1, 2, 2, 3]);
console.log(set);
// -------------------------------------------------------------------------------
// Type Coercion (Auto-Conversion) - JavaScript auto-converts types in some operations:

console.log("5" + 1); // "51" → number converted to string
console.log("5" - 1); // 4 → string converted to number
console.log(true + 1 + true);
console.log(null + 1);
console.log(undefined + 1);
// ================================================================================
