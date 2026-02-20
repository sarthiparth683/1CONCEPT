// Practise Loop, functions & Math Problems
// ### Question 1: Sum of all natural numbers from 1 to n

function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

// console.log(sumOfNaturalNumber(5));
// console.log(sumOfNaturalNumber(10));
// console.log(sumOfNaturalNumber(8));
// ====================================================================
// ### Question 2: Sum of digits of a number
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10; // Modulas gives last digits(as a remainder)
    num = Math.floor(num / 10); // to get remaining digits
  }
  return sum;
}

// console.log(sumOfDigits(1287));
// console.log(sumOfDigits(375));
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
    num = Math.floor(num / 10); // removes last digits with every iteration
    // num = (num / 10);
    // console.log(num);
  } while (num > 0);
  return count;
}

// console.log(countDigits(17859)); // 5
// console.log(countDigits(121)); // 3
// console.log(countDigits(-1211413131)); // 10
// console.log(Math.floor(1287 / 10))
// ----------------------------------------
// Method II
function count(num) {
  num = Math.abs(num);
  let str = num.toString();
  return str.length;
}

console.log(count(17859)); // 5
console.log(count(121)); // 3
console.log(count(-1211413131)); // 10
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
  let totalSumOfNaturalNumbers = (arr.length * (arr.length + 1)) / 2;
  let sumOfgivenArray = sum;
  return totalSumOfNaturalNumbers - sumOfgivenArray;
};

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
// =====================================================================================
function checkIfEvenOrOdd(a) {
  const remainder = a % 2;

  if (remainder === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(checkIfEvenOrOdd(13));
console.log(checkIfEvenOrOdd(-2));
console.log(checkIfEvenOrOdd(0));
console.log(checkIfEvenOrOdd(2));
console.log(checkIfEvenOrOdd(-1));
console.log(checkIfEvenOrOdd(1));
console.log(checkIfEvenOrOdd(157));
// =======================================
function checkIfEvenOrOdd2(x) {
  return x % 2 === 0 ? "even" : "odd";
}

console.log(checkIfEvenOrOdd2(13));
console.log(checkIfEvenOrOdd2(-2));
console.log(checkIfEvenOrOdd2(0));
console.log(checkIfEvenOrOdd2(2));
console.log(checkIfEvenOrOdd2(-1));
console.log(checkIfEvenOrOdd2(1));
console.log(checkIfEvenOrOdd2(157));
// =====================================================================================

function reverseAString(inputString) {
  if (typeof inputString !== "string") {
    throw new Error("Only strings are allowed");
  }

  let result = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    result += inputString[i];
  }

  return result;
}

// console.log(reverseAString(989989))
console.log("reverse");
console.log(reverseAString("Ashish"));
console.log(reverseAString("Software development"));
// ------------------------------------------------
function reverseAString2(inputString) {
  const splittedInput = inputString.split("");
  console.log(splittedInput);
  const reversedArray = splittedInput.reverse();
  console.log(reversedArray);
  const result = reversedArray.join("");
  console.log(result);
  return result;
}

console.log(reverseAString2("Ashish"));
console.log(reverseAString("Software development"));
// =====================================================================================

function smallestOfThree(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else if (c < a && c < b) {
    return c;
  }

  return a;
}
console.log(smallestOfThree(3, 1, 6));
console.log(smallestOfThree(-1, -6, 9));
console.log(smallestOfThree(3, 3, 3));
console.log(smallestOfThree(3, 3, 1));
console.log(smallestOfThree(8, 3, "hghg"));
// -------------------------------------------
function smallestOfThree2(a, b, c) {
  let smallestNumber = a;
  if (b < smallestNumber) {
    smallestNumber = b;
  }
  if (c < smallestNumber) {
    smallestNumber = c;
  }

  return smallestNumber;
}

console.log(smallestOfThree2(3, 1, 6));
console.log(smallestOfThree2(-1, -6, 9));
console.log(smallestOfThree2(3, 3, 3));
console.log(smallestOfThree2(3, 3, 1));
console.log(smallestOfThree2(3, 3, 4));
// =====================================================================================
// function sum(a, b) {
//   const sum = a + b;
//   // console.log("Sum is", sum);
//   return sum
// }
// console.log(sum(1, 2))

// sum(123, 234);
// sum(-1, 2); 
// sum(-1, -2);
// sum(1, 0);
// sum(1, 1.5);
// sum(2.5, 1.5);
// =====================================================================================