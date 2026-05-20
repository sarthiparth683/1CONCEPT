let arr = [5, 3, 9, 87, 12, 0, 34, 56];
let sorted = arr.sort(); // need comparator for correct result in numeric case
console.log(sorted);
// Wrong Output: [0, 12, 3, 34, 5, 56, 87, 9] - Why? Because, Numbers are converted to strings, by default: "5", "3", "9", "87", etc.Strings are compared character by character using Unicode values
// -----------------------------------------------------------------------
// That's Why We Need a Comparator for Numbers: arr.sort((a, b) => a - b); // Compares actual numeric values
let arr1 = [5, 3, 9, 87, 12, 0, 34, 56];
let a = arr1.sort((a, b) => a - b);
console.log("Ascending Order - ", a);

let d = arr1.sort((a, b) => b - a);
console.log("Descending Order", d);
//----------------------------------------------------------------------------
//  Sorting Strings Alphabetically:

let names = [
  "Sarthi",
  "Alexander",
  "Hector",
  "Achilies",
  "Herculies",
  "Barcelona",
];
console.log(names.sort());
console.log(names.sort().reverse());
// --------------------------------------------------------------------------------------
// 6. Sorting Objects by a Property:

const people = [
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 20 },
  { name: "Bob", age: 30 },
];

console.log(people.sort((a, b) => a.name - b.name));
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
console.log(people.sort((a, b) => a.age - b.age));
//-------------------------------------------------------------------------------------
