// sort(a, b) :-
// used for asscending and descending order
// both numbers and alphabets
// 1. Sorting Strings Alphabetically:
let names = ["Sarthi", "Alexander", "Hector", "Achilies", "Herculies"];
names.sort() /// sorts names from a to z
names.sort().reverse() // sorts from z to a
// console.log(names);
// --------------------------------------------------------------------------------------
// 2. Assending and Descending Order
let arr1 = [5, 3, 9, 87, 12, 0, 34, 56]
let a = arr1.sort((a, b) => a - b);
// console.log("Assending Order - ",a);
let d = arr1.sort((a, b) => b - a);
// console.log("Descending Order",d);
//-------------------------------------------------------------------------------------------
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
// console.log(people);
//-------------------------------------------------------------------------------
// 7. Sorting Dates:
const dates = [new Date(2024, 3, 25), new Date(2024, 2, 14), new Date(2024, 4, 10)];
dates.sort();
// console.log(dates);
//-----------------------------------------------------------------------------------
// 3. Sorting Strings (Case-Sensitive):
const fruits1 = ["Banana", "Apple", "Cherry"];
fruits.sort(); // Sorts strings alphabetically (case-sensitive)
// console.log(fruits); 
//------------------------------------------------------------------------------------
// 5. Sorting Objects by a Property (Ascending):  
const products = [
  { name: "Apple", price: 5.25 },
  { name: "Banana", price: 5.75 },
  { name: "Orange", price: 5.50 }
];
products.sort((a, b) => a.price - b.price); // Sort by price (ascending)
// console.log(products);
//------------------------------------------------------------------------------------
// 7. Sorting by Length of Strings (Shortest to Longest):
const words = ["hello", "world", "h", "ar345", "you"];
words.sort((a, b) => a.length - b.length); // Sort by string length
// console.log(words);
//------------------------------------------------------------------------------------