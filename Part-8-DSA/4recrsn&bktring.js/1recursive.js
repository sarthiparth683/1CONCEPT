// Recursion is a technique where a function calls itself to solve a smaller version of the same problem.

// Recursion
// ├── Recursive Functions
// ├── Base Condition
// ├── Factorial
// ├── Fibonacci
// ├── Binary Search
// └── Tree Traversal
// =======================================================================
// Example 1: Count Down
function countDown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }

  console.log(n);
  countDown(n - 1); // Recursive Call
}

countDown(5);
// =======================================================================
// Example 2: Sum of Numbers
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1); // Recursive Call
}

console.log(sum(5));
// =======================================================================
// Example 3: Factorial
function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1); // Recursive Call
}

console.log(factorial(5));
// =======================================================================
// Reverse String
function reverse(str) {
  if (str.length === 0) return "";

  return reverse(str.slice(1)) + str[0];
}
// =======================================================================
// Base condition
function printNumbers(n) {
  if (n === 0) return; // Base Condition

  console.log(n);
  printNumbers(n - 1);
}

printNumbers(5);
// =======================================================================
// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
// =======================================================================
// Recursive Binary Search Array must be sorted.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1, 3, 5, 7, 9], 7));
// =======================================================================
