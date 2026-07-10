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

for (let i = 0; i <= str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    console.log(str.slice(i, j));
  }
}

// -------------------------------------------------------------------------------------