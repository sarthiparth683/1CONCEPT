// ## Curring
// A function that takes multiple arguments is transformed into a sequence (or chain) of function,Each inner function "remembers" the variables from its outer scope

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));
// in arrow function
const add = (a) => (b) => (c) => a + b + c;
