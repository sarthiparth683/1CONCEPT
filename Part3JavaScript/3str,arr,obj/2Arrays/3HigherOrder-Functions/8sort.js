
//******************************************************
// sort(a, b) ==> a & b are adjacent elements.
//     sorting means, arranging in ascending / desceding order
// -------------------------------------------------------
//   sorting strings ==> no need to use(a, b)
let names = ["venu", "prafull", "ashok", "tushar", "rohit",]
names.sort() /// sorts names from a to z
names.sort().reverse() // sorts from z to a
// -------------------------------------------------------
//   sorting numbers
let numbers = [5, 3, 9, 87, 12, 0, 34, 56]
// sorting in ascending order
numbers.sort((a, b) => {
  return a - b
});
// -------------------------------------------------------
//   sorting in descending order
numbers.sort((a, b) => {
  return b - a
});
//******************************************************




























// used for asscending and descending order
// both numbers and alphabets

// 1. Sorting Numbers (Ascending):
const numbers12 = [3, 1, 4, 5, 2];
numbers.sort((a, b) => a - b);
console.log(numbers);


// 2. Sorting Numbers (Descending): 

const numbers1 = [3, 1, 4, 5, 2];
numbers.sort((a, b) => b - a);
console.log(numbers);

// 3. Sorting Strings (Case-Sensitive):

const fruits = ["Banana", "Apple", "Cherry"];
fruits.sort(); // Sorts strings alphabetically (case-sensitive)
console.log(fruits); // Output: ["apple", "Banana", "Cherry"]


// 4. Sorting Strings (Case-Insensitive):
const fruits1 = ["Banana", "apple", "Cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits); // Output: ["apple", "Banana", "Cherry"] (case-insensitive)


// 5. Sorting Objects by a Property (Ascending):  

const products = [
  { name: "Apple", price: 1.25 },
  { name: "Banana", price: 0.75 },
  { name: "Orange", price: 1.50 }
];
products.sort((a, b) => a.price - b.price); // Sort by price (ascending)
console.log(products);
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
console.log(products);
// Output: [ { name: 'Orange', price: 1.5 },
//           { name: 'Apple', price: 1.25 },
//           { name: 'Banana', price: 0.75 } ]



// 7. Sorting by Length of Strings (Shortest to Longest):

const words = ["hello", "world", "how", "are", "you"];
words.sort((a, b) => a.length - b.length); // Sort by string length
console.log(words); // Output: ["how", "you


// Copy code
let numbers2 = [4, 2, 9, 1, 3, 6];
numbers.sort();
console.log(numbers);  // [1, 2, 3, 4, 6, 9]

