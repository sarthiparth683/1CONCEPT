// ## Curring

// a function that takes multiple arguments is transformed into a sequence (or chain) of function

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

const add = (a) => (b) => (c) => a + b + c;
