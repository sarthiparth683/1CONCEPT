// Operators are special symbols or keywords in JavaScript used to perform operations on valu(operands).
//-------------------------------------------------------------
// Arithmetic Operators

// +  addition
// -  subtraction
// *  multiplication
// /  division
// %  modulus (remainder)
// **  exponentiation (power)

// let a = 10, b = 3;
// console.log(a % b); // 1 moculas give remainder
// console.log(2 ** 3); // 8
// ------------------------------------------------------------

// Assignment Operators

// =  assigns value
// +=  a += b => a = a + b
// -=  a -= b => a = a - b
// *=, /=, %=

// let score = 5;
// score += 2; 
// console.log(score) // 7
// ---------------------------------------------------
// Comparison Operators

// ==  equal (loose)
// ===  equal (strict – value + type)
// !=  not equal (loose)
// !==  not equal (strict)
// > < >= <=

// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(5 != 5); // false
// console.log(5 != 4); // true
// console.log(5 !== "5") // true strict not equal
// ---------------------------------------------------------

// Logical Operators

// &&  AND – both must be true
// ||  OR – either one true
// !  NOT – negates truthiness

// let age = 20, hasID = true;
// if (age >= 18 || hasID) {
//  console.log("Allowed");
// }
// ------------------------------------------------------------------

// Unary Operators

// +  tries to convert to number
// -  negates
// ++  increment
// --  decrement
// typeof  returns data type

// let x = "5";
// console.log(+x); // 5 (converted to number)
// --------------------------------------------------------------------
// Ternary Operator (Conditional)

// condition ? valueIfTrue : valueIfFalse

// let score = 80;
// let grade = score > 50 ? "Pass" : "Fail";
// console.log(grade);
//------------------------------------------
// console.log("10" + 1); // 101
// console.log("10" - 1); // 9
// console.log(true + false); // 1
// console.log(!!"Sheryians"); // true
// console.log(!"Sheryians"); // false

// let str = "42";
// let num = +str;
// console.log(num); // 42

// let age = 17;
// let msg = age >= 18 ? "Adult" : "Minor";
// console.log(msg)

