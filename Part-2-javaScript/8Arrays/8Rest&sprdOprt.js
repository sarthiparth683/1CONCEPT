// ## Spread Operator (...) - used to expand elements of an iteratable(like array or object) into individual elements.

// const nums = [1, 2, 3];
// const newNum = [...nums, 4, 5];
// console.log(newNum);
// -------------------------------

// const user = {
//   name: "Alice",
//   age: 25,
// };
// const updatedUser = { ...user, city: "Kolkata" };
// console.log(updatedUser);

// ---------------------------------------------------------------------------------------------------

// The rest operator (...) in JavaScript allows functions to accept an indefinite number of arguments as an array. 
// only deals with arrays

function sum(...numbers) { 
  // return numbers  // converted to array
  return numbers.reduce((total, num) => total + num, 0);
} 

console.log(sum(1, 2, 3)); //  Output:6 
console.log(sum(5, 10, 15, 20)); // Output: 50 