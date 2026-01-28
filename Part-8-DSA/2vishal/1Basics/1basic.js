// Practise Loop, functions & Math Problems
// ### Question 1: Sum of all natural numbers from 1 to n

function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

// console.log(sumOfNaturalNumber(5)); // 15
// console.log(sumOfNaturalNumber(10)); // 55
// console.log(sumOfNaturalNumber(8)); // 36
// ====================================================================

// ### Question 2: Sum of digits of a number

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10; //to get last digits
    num = Math.floor(num / 10); // to get remaining digits
  }
  return sum;
}

// console.log(sumOfDigits(1287)); // 18
// console.log(sumOfDigits(375)); // 15
// =====================================================================

// ### Question 3: Count the number of digits of a number

function countDigits(num) {
  num = Math.abs(num);
  // console.log(Math.abs(-5)); // 5
  // console.log(Math.abs(5)); // 5
  // console.log(Math.abs(0)); // 0
  // console.log(Math.abs(-3.7)); // 3.7
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
    // num = (num / 10);
    // console.log(num);
  } while (num > 0);
  return count;
}

// console.log(countDigits(17859)); // 5
// console.log(countDigits(121)); // 3
// console.log(countDigits(-1211413131)); // 10
// ----------------------------------------
// Method II
function count(num) {
  num = Math.abs(num);
  let str = num.toString();
  return str.length;
}

// console.log(count(17859)); // 5
// console.log(count(121)); // 3
// console.log(count(-1211413131)); // 10
// ==========================================================================
// ### Question 4: Check if a number is palindrome

let isPalindrome = function (x) {
  let num = x,
    reverseNum = 0;

  while (num > 0) {
    const lastDigit = num % 10; // gives last digit
    reverseNum = reverseNum * 10 + lastDigit; // reverse number
    num = Math.floor(num / 10); // Main work:- reduces digit after every iteration
  }

  return x === reverseNum;
};

// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(1234)); // false
// console.log(isPalindrome(5445)); // true
// =============================================================================
// ### Question 5: Find nth Fibonacci number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. eg.0112358
// Fibonacci Sequence: 0 1 1 2 3 5 8...

let fib = function (n) {
  if (n < 2) {
    return n;
  }

  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
    // console.log(i, next)
  }
  return next;
};

// console.log(fib(5)); // 5
// console.log(fib(10)); // 55
// =======================================================================================
// ### Question 6: Missing Number in an Array
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let missingNumber = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (arr.length * (arr.length + 1)) / 2 - sum;
};

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
// =====================================================================================
