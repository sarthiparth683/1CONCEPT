// Array Method's
// push() - add elements to the end
// pop() - removes the last element
// shift() - removes the first element
// unshift() - adds to the beginning
// concat() - merge arrays
// indexOf() - finds elements
// includes() - checks for existence
// join() - creates strings
// reverse() - reverses the array
// slice() - extract portions
// splice() - modifies arrays by removing
// Common Confusions
// splice changes original array, slice does not
// ------------------------------------------------------------------------
// 1. push() - add elements to the end

let fruits = ["apple", "banana"];
fruits.push("litchi");
fruits.push(true);
fruits.push(45);
fruits.push("this is last element");
console.log(fruits);
//--------------------------------------------------------------------------------------------------
// 2. pop() - removes element from the end

let arr1 = ["apple", "banana", "orange", 4, 5, "2nd last", "last"];
arr1.pop();
console.log(arr1);
//--------------------------------------------------------------------------------------------------
// 3. The shift() method delete the first element.

let arr2 = ["apple", "banana", "orange", 4, 5, 6, 7, 8, 9, 10, 11];
arr2.shift();
arr2.shift();
console.log(arr2);
//--------------------------------------------------------------------------------------------------
// 4. unshift() method adds before first-element

let arr3 = ["apple", "banana", "mango"];
arr3.unshift("orange", "litchi");
arr3.unshift(32);
console.log(arr3);
//--------------------------------------------------------------------------------------------------
// 5. The concat() method combines two or more arrays

let arr4 = ["arr1", "apple", "banana", "mango"];
let arr5 = ["arr2", "b", "c", 4, "end"];
// let arr6 = arr4.concat(arr5);
//or
let arr6 = [...arr4, ...arr5];
console.log(arr6);
//--------------------------------------------------------------------------------------------------
// 6. indexOf() - gives the index of the element if element is present else (-1)

let arr7 = ["apple", "banana", "orange", 4, 5, 6, 7, 8];
console.log(arr7.indexOf("banana"));
console.log(arr7.indexOf(5));
console.log(arr7.indexOf("orange"));
console.log(arr7.indexOf(8));
//--------------------------------------------------------------------------------------------------
// 7. The includes() method checks if an array includes a certain element and returns true or false(like Boolean).

let arr8 = ["apple", "banana", "orange"];
console.log(arr8.includes("banana"));
console.log(arr8.includes("litchi"));
console.log(arr8.includes("orange"));
//--------------------------------------------------------------------------------------------------
// 8. The join() method to convert array into a string.

let arr9 = ["apple", "banana", "orange"];
let arr10 = arr9.join(", ");
console.log(arr10);
let arr11 = arr9.join("--");
console.log(arr11);
//--------------------------------------------------------------------------------------------------
// 9. The reverse() method reverses the order of the elements in an array. It's like flipping a deck of cards.

let arr12 = [1, 2, "apple", "banana", "orange", 3, 4, 5];
console.log(arr12.reverse());
//--------------------------------------------------------------------------------------------------
// 10. sort() converts elements to strings and sorts them lexicographically (alphabetically),so For sorting numbers, You need to use an arrow function (comparator)

let arr13 = [10, 2, 3];
console.log(arr13.sort()); // wrong output for sorting numbers

let sorted = arr13.sort((a, b) => a - b);
console.log(sorted);

let str = ["d", "a", "b", "c"];
console.log(str.sort()); // in case of string it arranges by default
// -------------------------------------------------------------------------------------------
const arr14 = [
  "carrot",
  "strawberry",
  "apple",
  "banana",
  "orange",
  "mango",
  "blueberry",
  "grape",
];
console.log(arr14.sort());
//--------------------------------------------------------------------------------------------------
// 11. toString

let arr = [1, 2, "asda", 45, "Test"];
console.log(arr.toString(" "));
//--------------------------------------------------------------------------------------------------
