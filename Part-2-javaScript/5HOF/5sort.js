// ### Sort

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 29, 10];
arr.sort((a, b) => {
  return a - b;
});

console.log(arr); // Output: [3, 4, 5, 6, 7, 8, 9, 10, 29]
```

// // These higher-order functions are powerful tools in JavaScript for working with arrays in a functional and declarative manner.
 

// ------------------------------------------------------------------------------
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
// ### Chaining

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = arr.map((ele) => {
  return ele * 3;
}).filter((ele) => {
  return ele % 2 === 0;
}).reduce((acc, ele) => {
  return acc + ele;
}, 0);

console.log(res); // Output: 72
```

//------------------------------------------------------------------------------------
// bubble sorting

// const arr = [42, -17, 8, 23, -56, 91, -34, 12, 77, -5];
const arr = [1, 2, 3, 4, 5];
const N = arr.length;

function swap(arr, i, j) {
   const temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

let count = 0;
for (let i = 0; i < N - 1; i++) {
   let isSwapped = false;
   for (let j = 0; j < N - i - 1; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
         swap(arr, j, j + 1);
         isSwapped = true;
      }
   }
   if (!isSwapped) break;
}
console.log(count);

console.log(...arr);
//------------------------------------------------------------------------------------
// insertion sort

const arr = [42, -17, 8, 23, -56, 91, -34, 12, 77, -5];
const N = arr.length;

for (let i = 1; i < N; i++) {
   const key = arr[i];
   let j = i - 1;
   while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
   }
   arr[j + 1] = key;
}

console.log(...arr);

//------------------------------------------------------------------------------------
// selection sorting

const arr = [42, -17, 8, 23, -56, 91, -34, 12, 77, -5];
const N = arr.length;

function swap(arr, i, j) {
   const temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

for (let i = 0; i < N - 1; i++) { // pointer
   let currGreatestElement = i;
   for (let j = i + 1; j < N; j++) {
      if (arr[j] > arr[currGreatestElement]) {
         currGreatestElement = j;
      }
   }
   swap(arr, i, currGreatestElement);
}

console.log(...arr);
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------