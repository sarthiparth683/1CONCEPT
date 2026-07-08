// Spread Operator (...) - used to expand elements of an iteratable(like array or object) into individual elements.

const nums = [1, 2, 3, 4, 5];
const newNum = [...nums, 6, 7, 8, 9];
console.log(newNum);
// -------------------
const user = {
  name: "Alice",
  age: 25,
};

const updatedUser = { ...user, city: "Kolkata" };
console.log(updatedUser);
//======================================================================
// The rest operator (...) used in functions.
function sum(...numbers) {
  return numbers  // converted to array
  // return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10, 15, 20));
// =======================================================================
