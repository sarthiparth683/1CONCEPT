


// The splice() method :-
// in JavaScript is a powerful tool for manipulating arrays. It allows you to remove, replace, or insert elements within an array, modifying the original array in the process. Here's a breakdown of its functionality:
// array.splice(start, deleteCount, item1, item2, ..., itemN)

// Removing elements:
const fruits = ["apple", "banana", "orange", "mango"];
fruits.splice(1, 2); // Removes "banana" and "orange"
// console.log(fruits); // Output: ["apple", "mango"]  

// Adding elements:
const numbers = [1, 2, 3, 4, 5, 6, 7, 9];
numbers.splice(1, 5, 78, 95); // Inserts 4 and 5 at index 2
// console.log(numbers); // Output: [1, 2, 4, 5, 3]

// Replacing elements:
const colors = ["red", "green1", "blue2", "purple3", "apple4", "banana", "orange", "mango"];
colors.splice(1, 4, "check1", "check2", "3", "4", "5", "6", "7", "8", "9", "10");
// removes 1 to 4 - (i.e- red to banana)
// && check1 to 1010
console.log(colors);
//-------------------------------------------------------------------------
