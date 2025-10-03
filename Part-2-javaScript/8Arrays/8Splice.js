
// The splice() method :- It allows you to remove, replace, or insert elements within an array, modifying the original array in the process. Here's a breakdown of its functionality:
// array.splice(start-i, end-i, item1, item2, ..., itemN)

// Removing elements:
const fruits = ["apple", "banana", "orange", "mango"];
const removed = fruits.splice(1, 2); // Removes "banana" and "orange"
// console.log(removed); // removed banana and orange
// console.log(fruits); // Output: ["apple", "mango"]  
//---------------------------------------------------------------------
// Adding elements:
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let removed1 = numbers.splice(1, 4, "add1", 78, 95, "add-nth");
//  console.log(removed1); // removes 2 to 5 
// console.log(numbers); // Output:  [1, 'add1', 78, 95, 'add-nth', 6, 7, 9, 10]
//----------------------------------------------------------------------
// Replacing elements:
const colors = ["red", "green1", "blue2", "purple3", "apple4", "banana", "orange", "mango"];
let removed2 = colors.splice(1, 4, "add1", "1", "2", "3", "....", "add-nth");
console.log(removed2);// removed = [ "green1", "blue2", "purple3", "apple4"];
console.log(colors); // New array = ["red","add1", "1", "2", "3", "....", "add-nth", "banana", "orange", "mango"];
//-----------------------------------------------------------------------------------
