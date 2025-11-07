// Subarray - A subarray is a contiguous (consecutive) portion of an array that maintains the original order. Think of it as a "slice" of the array.

//  let arr9 = [1, 2, 3, 4, 5];
// // Subarrays (contiguous elements):
// [1, 2, 3]     // ✓ valid subarray
// [2, 3, 4]     // ✓ valid subarray
// [3, 4, 5]     // ✓ valid subarray
// [5]

// Example 1
// const arr = [1, 2, 3, 4, 5];
// const subArray = arr.slice(1, 4); // [2, 3, 4]
// console.log(subArray);

// Example 2
// const str = "hello";
// const sub = str.substring(1, 4); // "ell"
// console.log(sub);
// ----------------------------------------------------------------------
// Subset - An array subset is a set of elements from an array where all elements of the subset exist in the original array, but not necessarily in consecutive order or in the same sequence.

// let arr2 = [1, 2, 3, 4, 5];
// // Subsets (any combination):
// [1, 3, 5]     // ✓ valid subset
// [2, 4]        // ✓ valid subset
// // []            // ✓ valid subset (empty set)
// [5, 3, 1]

// Example
function isSubset(arr, subset) {
  return subset.every(element => arr.includes(element));
}

const arr = [1, 2, 3, 4, 5];
console.log(isSubset(arr, [1, 3, 5])); // true
console.log(isSubset(arr, [1, 6])); // false