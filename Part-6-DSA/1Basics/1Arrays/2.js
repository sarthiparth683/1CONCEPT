// Medium-level
//-----------------------------------------------------
//  Remove duplicates using Set

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = new Set(arr)
// let arr2 = Array.from(unique)
// // let unique = [...new Set(arr)];
// // console.log(unique);
// console.log(arr2)
//-----------------------------------------------------
// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// // let arr3 = arr1.concat(arr2);
// let arr3 = [...arr1, ...arr2];
// arr3.sort((a, b) => b - a);
// console.log(arr3);
//-----------------------------------------------------
// find common elements in two arrays

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.includes(arr1[i])) {
//     console.log(arr1[i]);
//   }
// }
//-----------------------------------------------------
// find common elements in two arrays

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let intersection = arr1.filter(el => arr2.includes(el));
// console.log(intersection);
//-----------------------------------------------------
//  Rotate an array.

// let arr = [10, 20, 30, 40, 50];
// let k = 3;
// let rotated = arr.slice(k).concat(arr.slice(0, k));
// console.log(rotated);
//-----------------------------------------------------
// Sum all numbers in a 2D array

// let arr = [
//   [2, 4],
//   [6, 8],
//   [10, 12],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);
//-----------------------------------------------------
// Flatten a 2D array

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// let flat = arr.flat();
// console.log(flat);
//-----------------------------------------------------
// let arr = [
//   [10, 20],
//   [30, 40],
//   [50, 60],
// ];
// let flat = arr.flat();
// console.log(flat);
//-----------------------------------------------------
// Find the first even number:
// find returns only the first match → single value (or undefined)

// let arr = [1, 3, 5, 4, 6];
// let firstEven = arr.find(el => el % 2 === 0);
// console.log(firstEven);
//-----------------------------------------------------
// let fruits = ["apple", "banana", "kiwi", "mango", "strawberry"];
// let res = fruits.find((el) => el.length > 5);
// console.log(res);
//-----------------------------------------------------
// let arr = [4, 9, 16, 25];
// let res = arr.find((el) => el > 10);
// console.log(res);
//-----------------------------------------------------
// let fruits = ["apple", "banana", "kiwi", "mango", "strawberry"];
// let res = fruits.find((el)=> el.startsWith("s"));
// console.log(res);
//-----------------------------------------------------
// let fruits = ["apple", "banana", "kiwi", "mango", "strawberry"];
// let res = fruits.find((el)=> el[0] == "s");
// console.log(res);
//-----------------------------------------------------
// some checks if at least one element in the array matches a condition.

// let nums = [1, 3, 5, 8, 10];
// let hasEven = nums.some((n) => n % 2 === 0);
// console.log(hasEven);
//-----------------------------------------------------
// let nums = [5, 7, 9, 12, 15];
// let res = nums.some((el) => el % 4 === 0);
// console.log(res);
//-----------------------------------------------------
// every Checks if ALL elements in an array satisfy a condition.

// let nums = [2, 4, 6, 8];
// let allEven = nums.every((n) => n % 2 === 0);
// console.log(allEven);
//-----------------------------------------------------
// let ages = [18, 21, 25, 30];
// let res = ages.every((el) => el >= 18);
// console.log(res);
//-----------------------------------------------------
// mixed problems

// let ages = [15, 22, 18, 35, 40, 12];
// let filter = ages.filter((el) => el >= 18);
// console.log("Filter", filter);
// let map = filter.map((el) => el + 1);
// console.log("Map", map);
// let some = map.some((el) => el >= 40);
// console.log("some", some);
// let every = map.every((el) => el >= 18);
// console.log("every", every);
//-----------------------------------------------------
// findIndex - it returns the index of the first match. or -1

// let nums = [5, 10, 15, 20];
// let idx = nums.findIndex((n) => n > 12);
// console.log(idx);
//-----------------------------------------------------
// let names = ["Alice", "Bob", "Charlie", "David"];
// let index = names.findIndex((el) => el.startsWith("C"));
// console.log(index);
// // or
// let names = ["Alice", "Bob", "Charlie", "David"];
// let index = names.findIndex((el) => el[0]==("C"));
// console.log(index);
//-----------------------------------------------------
// removeDuplicates
// function removeDuplicates(arr) {
//   return arr.filter((el, index) => arr.indexOf(el) === index);
// }
// let res = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(res);
//-----------------------------------------------------
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// let res = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// console.log(res);
//-----------------------------------------------------
