// The slice() method extracts a section of an array and returns a new array. It takes two arguments: the start index (inclusive) and the end index (exclusive). It's like cutting out a specific portion from a cake.

let arr1 = [
  "apple",
  "banana",
  "orange",
  "grape",
  "mango",
  "kiwi",
  "melon",
  "Berry",
];
let arr2 = arr1.slice(1, 3);
console.log(arr2);
// --------------------------------------------------------------------------------------
// splice() method :- array.splice(start-i, end-i, item1, item2, ..., itemN) It allows you to remove, replace, or insert elements within an array, modifying the original array in the process.

const fruits = ["apple", "banana", "orange", "mango"];
const removed = fruits.splice(1, 2, "add1", "add2", "...");
console.log(fruits); 
//---------------------------------------------------------------------
// Adding elements:
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let removed1 = numbers.splice(1, 4, "add1", "add2", "add-nth");
console.log(numbers);
//----------------------------------------------------------------------