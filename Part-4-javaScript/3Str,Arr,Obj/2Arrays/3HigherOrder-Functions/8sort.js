
// sort(a, b) ==> a & b are adjacent elements.
//     sorting means, arranging in ascending / desceding order
// -------------------------------------------------------
let names = ["venu", "prafull", "ashok", "tushar", "rohit",]
names.sort() /// sorts names from a to z
names.sort().reverse() // sorts from z to a
// -------------------------------------------------------
//   sorting numbers
let arr1 = [5, 3, 9, 87, 12, 0, 34, 56]
// sorting in ascending order
let a = arr1.sort((a,b)=> a-b);
// console.log("Assending Order - ",a);
// -------------------------------------------------------
//   sorting in descending order
let d = arr1.sort((a,b)=> b-a);
// console.log("Descending Order",d);
//------------------------------------------------------------
// 1. Sorting Numbers in Ascending Order (Default Behavior):
const numbers = [3, 1, 4, 5, 2];
numbers.sort();
// console.log(numbers); 
// Output: [1, 2, 3, 4, 5]
//--------------------------------------------------------------
//2. Sorting Numbers in Descending Order:
const arr2 = [3, 1, 4, 5, 2];
arr2.sort((a, b) => b - a);
// console.log(arr2);
 // Output: [5, 4, 3, 2, 1]
//-----------------------------------------------------------------
// 3. Sorting Strings Alphabetically:
const arr3 = ["apple", "banana", "orange", "cherry"];
arr3.sort();
// console.log(arr3); 
// Output: ["apple", "banana", "cherry", "orange"]
//---------------------------------------------------------------------------
// 5. Sorting Case-Insensitive Strings:
const fruits = ["Apple", "banana", "Orange", "cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(fruits); 
// Output: ["apple", "banana", "cherry", "Orange"]
//-----------------------------------------------------------------
// 6. Sorting Objects by a Property:

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: [ { name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]
//-------------------------------------------------------------------------------
// 7. Sorting Dates:

JavaScript
const dates = [new Date(2024, 3, 25), new Date(2024, 2, 14), new Date(2024, 4, 10)];
dates.sort();
console.log(dates);
// Output: [
//   Wed Feb 14 2024 00:00:00 GMT-0500 (Eastern Standard Time),
//   Fri Apr 26 2024 00:00:00 GMT-0500 (Eastern Standard Time),
//   Mon Apr 25 2024 00:00:00 GMT-0500 (Eastern Standard Time)
// ]




















// used for asscending and descending order
// both numbers and alphabets

// 1. Sorting Numbers (Ascending):
const numbers12 = [3, 1, 4, 5, 2];
numbers.sort((a, b) => a - b);
// console.log(numbers);


// 2. Sorting Numbers (Descending): 

const numbers1 = [3, 1, 4, 5, 2];
numbers.sort((a, b) => b - a);
// console.log(numbers);

// 3. Sorting Strings (Case-Sensitive):

const fruits1 = ["Banana", "Apple", "Cherry"];
fruits.sort(); // Sorts strings alphabetically (case-sensitive)
// console.log(fruits); 
// Output: ["apple", "Banana", "Cherry"]


// 4. Sorting Strings (Case-Insensitive):
const fruits2 = ["Banana", "apple", "Cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(fruits); 
// Output: ["apple", "Banana", "Cherry"] (case-insensitive)


// 5. Sorting Objects by a Property (Ascending):  

const products = [
  { name: "Apple", price: 1.25 },
  { name: "Banana", price: 0.75 },
  { name: "Orange", price: 1.50 }
];
products.sort((a, b) => a.price - b.price); // Sort by price (ascending)
// console.log(products);
// Output: [ { name: 'Banana', price: 0.75 },
//           { name: 'Apple', price: 1.25 },
//           { name: 'Orange', price: 1.5 } ]


//   6. Sorting Objects by a Property (Descending):

const products1 = [
  { name: "Apple", price: 1.25 },
  { name: "Banana", price: 0.75 },
  { name: "Orange", price: 1.50 }
];
products.sort((a, b) => b.price - a.price); // Sort by price (descending)
// console.log(products);
// Output: [ { name: 'Orange', price: 1.5 },
//           { name: 'Apple', price: 1.25 },
//           { name: 'Banana', price: 0.75 } ]



// 7. Sorting by Length of Strings (Shortest to Longest):

const words = ["hello", "world", "how", "are", "you"];
words.sort((a, b) => a.length - b.length); // Sort by string length
// console.log(words); 
// Output: ["how", "you


// Copy code
let numbers2 = [4, 2, 9, 1, 3, 6];
numbers.sort();
// console.log(numbers);  
// [1, 2, 3, 4, 6, 9]

