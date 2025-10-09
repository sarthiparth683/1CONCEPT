
// Takes another function as an agrument, or Returns a functions as its result

// - Takes another function as an agrument, or

// function greet(name) {
//   return `Hello ${name}.`;
// }

// function processInput(callback) {
//   const name = "Alice";
//   console.log(callback(name));
// }

// processInput(greet);

// // A Function return another functions

// function multiplier(factor) {
//   return function (num) {
//     return num * factor;
//   };
// }
// const double = multiplier(2);
// console.log(double(10));
// -----------------------------------------------------------------------------------------------------
// taking a function as an argument
function greet(name) {
  return `Hello ${name}.`;
}

function processInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processInput(greet);

// A Function return another functions
// --------------------------------------------------------
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(10));
// ----------------------------------------------

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 3, 5, 8, 19));

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

const add = a => b => c => a + b + c;
// --------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------