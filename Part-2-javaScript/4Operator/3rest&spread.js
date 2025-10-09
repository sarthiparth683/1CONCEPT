// ## Spread Operator (...) - used to expand elements of an iteratable(like array or object) into individual elements.- Exampd elements Array, object, function calls [...arr] spread out

// const nums = [1, 2, 3];
// const newNum = [...nums, 4, 5];
// console.log(newNum);
// -------------------------------

// const user = { name: "Alice", age: 25 };
// const updatedUser = { ...user, city: "Kolkata" };
// console.log(updatedUser);

// --------------------------------------------------------------------------------------------------------------
// ## Rest Operator (...) - it collects multiple elements and bundles them into an array (like the oposit of the spread operator) - collect the elem function parameter (...args) gather in

function sum(...nums) {
  // ...nums -> gather all the elements into an array so that you can process them easily
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4));
