// Arithmetic Operators

// +  addition
// -  subtraction
// *  multiplication
// /  division
// %  modulus (remainder)
// **  exponentiation (power)
// -----------------------------------------------------------------
// Assignment Operators

// =  assigns value
// +=
// -=
// *=
// /=
// %=
// --------------------------------------------------------------------
// Comparison Operators

// ==  equal (loose, only check value, not data type)
// ===  equal (strict equality – value + dataType)
// !=  not equal (loose)
// !==  not equal (strict)
// > < >= <=

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 5);
console.log(5 != 4);
console.log(5 !== "5");
// ------------------------------------------------------------------
// Logical Operators

// &&  AND – both must be true
// ||  OR – either one must be true
// !  NOT – negates truthiness
// ------------------------------------------------------------------
// Unary Operators

// +  tries to convert to number
// -  negates
// ++  increment
// --  decrement

let x = "5";
console.log(+x);
console.log(x--);
console.log(x);
console.log("10" + 1);
console.log("10" - 1);
console.log(true + false);
console.log(true + false + true);
console.log(!"Sarthi");
console.log(!!"Sarthi");
// --------------------------------------------------------------------
// Ternary Operator (Conditional)
// condition ? valueIfTrue : valueIfFalse

let score = 80;
let grade = score > 50 ? "Pass" : "Fail";
console.log(score > 50 ? "Pass" : "Fail");
console.log(grade);
//----------------------------------------------------------------
