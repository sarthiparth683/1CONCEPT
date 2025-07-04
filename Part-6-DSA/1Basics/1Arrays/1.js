// Beginner-level

// ✅ Create an array
let arr = [1, 2, 3];

// ✅ Add/Remove
arr.push(4);      // [1,2,3,4]
arr.pop();        // [1,2,3]
arr.shift();      // remove first
arr.unshift(0);   // add first

// ✅ Map: transform
arr.map(x => x * 2);

// ✅ Filter: keep some
arr.filter(x => x > 1);

// ✅ Reduce: combine to one
arr.reduce((acc, val) => acc + val, 0);

// ✅ Sort: ascending
arr.sort((a, b) => a - b);

// ✅ Find: first match
arr.find(x => x > 2);

// ✅ Find index: position of first match
arr.findIndex(x => x > 2);

// ✅ Some: any match
arr.some(x => x > 2);

// ✅ Every: all match
arr.every(x => x > 0);

// ✅ Remove duplicates
[...new Set(arr)];

// ✅ Merge arrays
arr.concat([4, 5]);

// ✅ Flatten 1 level
let nested = [[1,2],[3,4]];
nested.flat();

// ✅ 2D traversal
for (let i = 0; i < nested.length; i++) {
  for (let j = 0; j < nested[i].length; j++) {
    // nested[i][j]
  }
}

// ✅ Intersection
arr1.filter(x => arr2.includes(x));

// ✅ Rotate k positions (right)
function rotate(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

//----------------------------------------------------
// let a = new Array();
// a.push(1);
// a.push(2);
// a.push(3);
// a.push(4);
// console.log(a);
//-------------------------------------------------------------
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(arr.slice(3,6))
// console.log(arr.splice(4, 2, "addedValue"));
// // splice(startingindex, how many value to delete, addNewValue)
// console.log(arr);
//----------------------------------------------------------
// let nums = [10, 5, 20, 8];
// let max = nums[0];
// for (let i = 1; i < nums.length; i++) {
//   if (max < nums[i]) {
//     max = nums[i];
//   }
// }
// console.log(max);
//----------------------------------------------------------------
// let arr = [1, 2, 3, 4];
// let reversed = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed);
//------------------------------------------------------------
// Search if an item exists
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits.includes("apple"))
//or
// let found = false;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "banana") {
//     found = true;
//     break;
//   }
// }
// console.log(found);
//-------------------------------------------------------
// Remove a specific item
// let fruits = ["apple", "banana", "mango"];
// let index = fruits.indexOf("mango");
// // console.log(index)
// if (index !== -1) {
//   fruits.splice(index, 1);
// }
// console.log(fruits);
//------------------------------------------------------
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let combined = a.concat(b);
// console.log(combined);
//-----------------------------------------------------
// //  Remove duplicates
// let nums = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];
// for (let i = 0; i < nums.length; i++) {
//   if (!unique.includes(nums[i])) {
//     unique.push(nums[i]);
//   }
// }
// console.log(unique);
//-----------------------------------------------------
// // Find the second largest number

// let nums = [10, 5, 20, 8, 15];
// let first = nums[0];
// let second = -Infinity;
// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] > first) {
//     // The old largest becomes second largest
//     second = first;
//     // The new largest is this number
//     first = nums[i];
//   }
//   // If current number is not bigger than first but is bigger than second
//   else if (nums[i] > second && nums[i] !== first) {
//     second = nums[i];
//   }
// }
// console.log("Largest number:", first);
// console.log("Second largest:", second);

//-----------------------------------------------------
// HOF-MAP

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((el)=> el * 5);
// console.log(doubled);
//-----------------------------------------------------
// let fruits = ["apple", "banana", "mango"];
// let lengths = fruits.map((el) => el.length);
// console.log(lengths);
//-----------------------------------------------------
// let names = ["Alice", "Bob", "Charlie"];
// let greetings = names.map(name => "Hello, " + name + "!");
// console.log(greetings);
//-----------------------------------------------------
// HOF-Filter

// let numbers = [1, 2, 3, 4, 5, 6];
// let evens = numbers.filter(el => el % 2 === 0);
// console.log(evens);
//-----------------------------------------------------
// let words = ["apple", "banana", "kiwi", "strawberry","aaa","aa"];
// let longWords = words.filter(el => el.length > 5);
// console.log(longWords);
//-----------------------------------------------------
// let ages = [12, 17, 18, 21, 16, 25];
// let adults = ages.filter((el) => el >= 18);
// console.log(adults);
//-----------------------------------------------------
// let names = ["Alice", "Bob", "Amanda", "Charlie", "Alex"];
// let startsWithA = names.filter(el => el.startsWith("A"));
// // let startsWithA = names.filter(el => el[0] == "A");
// console.log(startsWithA);
//-----------------------------------------------------
// let arr = ["apple", "banana", "kiwi", "mango", "strawberry"];
// let fruits = arr.filter((el) => el.includes("a") && el.length > 5);
// console.log(fruits);
//-----------------------------------------------------
// HOF - Sort
// By default, sort() converts everything to strings and sorts by Unicode.
//-----------------------------------------------------
// let nums = [20, 5, 100, 1];
// console.log(nums.sort());
//-----------------------------------------------------
// let nums = [20, 5, 100, 1];
// nums.sort((a, b) => {
// //   return a - b;  // assending
//    return b - a; // descending
// });
// console.log(nums);
//-----------------------------------------------------
// let fruits = ["banana", "apple", "mango", "kiwi","cucumber"];
// fruits.sort();
// fruits.reverse()
// console.log(fruits);
//-----------------------------------------------------
// let fruits = ["banana", "apple", "kiwi", "strawberry", "mango"];
// fruits.sort((a, b) => a.length - b.length);
// console.log(fruits);
//-----------------------------------------------------
// HOF - reduce
// used to combine all elements into a single result.

// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((acc, num) => acc + num, 0);
// console.log(sum);
//-----------------------------------------------------
// let nums = [1, 2, 3, 4];
// let product = nums.reduce((acc, num) => acc * num, 1);
// console.log(product);
//-----------------------------------------------------
// let nums = [55, 12, 8, 25, 3];
// let max = nums.reduce((acc, el) => {
//   return acc < el ? el : acc;
//   //   if (el > acc) {
//   //     return el;
//   //   } else {
//   //     return acc;
//   //   }
// }, nums[0]);
// console.log(max);
//-----------------------------------------------------
// let words = ["Hello", "world", "JS", "rocks"];
// let sentence = words.reduce((acc, word) => acc + " " + word);
// console.log(sentence);
//-----------------------------------------------------
// sum of squares

// let nums = [2, 4, 6];
// let sumOfSquares = nums.reduce((acc, num) => acc + num * num, 0);
// console.log(sumOfSquares);
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
