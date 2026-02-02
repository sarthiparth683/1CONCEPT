function isPerfectNumber(inputNumber) {
  // Validate if input number is a positive integer
  let sum = 0;
  for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      console.log(i);
      sum += i;
    }
  }

  return sum === inputNumber;
}

// console.log("6 is ", isPerfectNumber(6));
// console.log("5 is ", isPerfectNumber(5));
// console.log("28 is ", isPerfectNumber(28));
// ===================================================
function perfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return console.log(sum === num);
}

// perfect(6); // true
// perfect(5); // false
// perfect(28); // true
// perfect(30); // false
// =========================================================
