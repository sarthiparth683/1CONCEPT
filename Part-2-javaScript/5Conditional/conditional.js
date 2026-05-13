// Truthy and Falsy Values
// Falsy values: false , 0 , "" , null , undefined , NaN
// Everything else is truthy, including: "0" , "false" , [] , {} , function(){}
// -----------------------------------------------------------------
// Boolean() is a built-in function in JavaScript!
// Boolean() doesn't check if something is true or false - it converts any value to either true or false

console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean(undefined));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));
// ---------------------------------------------------------------------
if (true) {
  console.log(true);
} else {
  console.log(false);
}
// ===============================================
let days = 2;
switch (days) {
  case 0:
    console.log("Sunday");
  // break;
  // without break statement unnecessary code execution will continue leading to unexpected results.
  case 1:
    console.log("Monday");
  // break;
  case 2:
    console.log("Tuesday");
  // break;
  case 3:
    console.log("wednesday");
  // break;
  case 4:
    console.log("thrusday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  case 8:
    console.log("someday");
    break;
  default:
    console.log("invalid day");
    break;
}
