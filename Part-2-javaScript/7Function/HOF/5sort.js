// let arr = [5, 3, 9, 87, 12, 0, 34, 56];
// let sorted = arr.sort(); // No comparator function
// console.log(sorted);
// Wrong Output: [0, 12, 3, 34, 5, 56, 87, 9] - Why? Because, Numbers are converted to strings: "5", "3", "9", "87", etc.Strings are compared character by character using Unicode values
// -----------------------------------------------------------------------
// That's Why We Need a Comparator for Numbers: arr.sort((a, b) => a - b); // Compares actual numeric values
// Assending and Descending Order
// let arr1 = [5, 3, 9, 87, 12, 0, 34, 56];
// let a = arr1.sort((a, b) => a - b);
// console.log("Ascending Order - ", a);
// let d = arr1.sort((a, b) => b - a);
// console.log("Descending Order", d);
//----------------------------------------------------------------------------
//  Sorting Strings Alphabetically:
// let names = ["Sarthi", "Alexander", "Hector", "Achilies", "Herculies","Barcelona"];
// names.sort() /// sorts names from a to z
// console.log(names);
// names.sort().reverse() // sorts from z to a
// console.log(names);
// --------------------------------------------------------------------------------------
// 6. Sorting Objects by a Property:
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 }
// ];
// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.name - b.name);
// console.log(people);
//-------------------------------------------------------------------------------
