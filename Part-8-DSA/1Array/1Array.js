let person = {
  name: "Piyush",
  age: 25,
};

let arr = ["apple", "banana", "cherry", person];
console.log(arr.length);
arr.push("orange");
console.log(arr);
arr.pop();
arr.pop();
arr.unshift("orange");
console.log(arr);
arr.shift();
console.log(arr);
// ===============================================================
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
// =================================================================
const numbers = [1, 2, 3, 4, 5];
numbers.map((item, index, array) => {
  console.log(item + 5);
});

let filter = numbers.filter((item, index, array) => {
  return item > 3;
});
console.log(filter);

let reduce = numbers.reduce((prev, item) => {
  return prev + item;
}, 100);
console.log(reduce);

numbers.some((item, index, array) => {
  console.log(item > 3); // any one element should be true
});

numbers.every((item, index, array) => {
  console.log(item < 10); // every element should be true
});

numbers.find((item, index, array) => {
  console.log(item > 3);
});
// ==================================================================
const index = [1, 2, 3, 4, 5, 6, 7, 8].findIndex((item) => item === 4);
console.log(index);
// ===================================================================
// Spread Operators - Expands an iterable (like an array or object) into individual elements.
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];
const finalNums = [...nums, ...nums2];
console.log(finalNums);

// Rest Operator - collects multiple individual arguments into a single array.
function sum(...numbers) {
  return numbers;
}

console.log(sum(nums, nums2, 5, "hello"));
// =======================================================
console.log(nums.concat(nums2, arr));

let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr2.slice(1, 5));
console.log(arr2.splice(1, 2, "orange"));
console.log(arr2);
// =========================================================
const dummy = [2, 5, 1, 6];
console.log(dummy.fill("**", 2));
// ========================================================
const flatEx = [1, [2, 3], [[4, 5], 6]];
const flattenedArray = flatEx.flat(2);
console.log(flattenedArray);
// ========================================================
nums.reverse();
console.log(nums);
// ========================================================
const unsorted = [5, 2, 10, 7, 3, 1];
console.log(unsorted.sort((a, b) => a - b));
console.log(unsorted.sort((a, b) => b - a));
// ========================================================
