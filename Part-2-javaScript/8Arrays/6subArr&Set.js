// Subarray - A subarray is a contiguous (consecutive) portion of an array that maintains the original order. Think of it as a "slice" of the array.

// Example 1
const arr = [1, 2, 3, 4, 5];
const subArray = arr.slice(1, 4);
console.log(subArray);

// Example 2
const str = "hello";
const sub = str.substring(1, 4);
console.log(sub);

// Example 3 - all subArrays
for (let start = 0; start < arr.length; start++) {
  for (let end = start + 1; end <= arr.length; end++) {
    console.log(arr.slice(start, end));
  }
}

// -------------------------------------------------------------------------------------
// Subset - An array subset is a set of elements from an array where all elements of the subset exist in the original array, but not necessarily in consecutive order or in the same sequence.

function getAllSubsets(arr) {
  const subsets = [];

  for (let i = 0; i < Math.pow(2, arr.length); i++) {
    const subset = [];
    for (let j = 0; j < arr.length; j++) {
      // Check if jth bit is set in i
      if (i & (1 << j)) {
        subset.push(arr[j]);
      }
    }
    subsets.push(subset);
  }

  return subsets;
}

console.log(getAllSubsets([1, 2, 3]));
// ----------------------------------------------------------------------------------------
