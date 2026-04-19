// A perfect number is a positive integer that is equal to the sum of its proper divisors.

function isPerfectNumber(inputNumber) {
  // Validate if input number is a positive integer
  if (inputNumber <= 0) {
    return false;
  }

  let sum = 0;
  for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      sum += i;
    }
  }

  return sum === inputNumber;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(5));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(27));
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(500));
// =================================================