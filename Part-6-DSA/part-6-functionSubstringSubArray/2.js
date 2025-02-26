// Array.slice Method in js 

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits.slice(1, 3); 

console.log(fruits); // Original array remains unchanged
console.log(slicedFruits); // ["banana", "cherry", "date"]
//------------------------------------------------------------------------------------------------------
let numbers = [10, 20, 30, 40, 50];
let slicedNumbers = numbers.slice(1); 

console.log(slicedNumbers); // [30, 40, 50]
//--------------------------------------------------------------------------------------------

let originalArray = [1, 2, 3, 4];
let clonedArray = originalArray.slice();

// console.log(clonedArray); // [1, 2, 3, 4]
// console.log(originalArray === clonedArray); // false (different references)
