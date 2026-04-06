console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(-4.6)); // -5
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(-4.1)); // -5
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.9)); // -4
console.log(Math.abs(-7)); // 7
console.log(Math.abs(0)); // 0
console.log(Math.min(10, 2, 8, 1)); // 1
console.log(Math.max(10, 2, 8, 1)); // 10
console.log(Math.pow(3, 2)); // 9
console.log(Math.sqrt(16)); // 4
// ================================================
function calculateSumOfDigits(number) {
  if (number < 1) {
    throw new Error("inputNumber must be a positive number");
  }

  number = number.toString().split("");

  let sumOfDigits = 0;
  number.forEach((num) => {
    sumOfDigits = sumOfDigits + parseInt(num); // or
    // sumOfDigits = sumOfDigits + Number(num);
  });
  return sumOfDigits;
}

console.log(calculateSumOfDigits(12));
console.log(calculateSumOfDigits(23));
console.log(calculateSumOfDigits(456));
// ---------------------------------------------------
function calculateSumOfDigits2(number) {
  let sumOfDigits = 0;
  while (number > 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    sumOfDigits = sumOfDigits + lastDigit;
  }

  return sumOfDigits;
}

console.log(calculateSumOfDigits2(12));
console.log(calculateSumOfDigits2(23));
console.log(calculateSumOfDigits2(456));
// -----------------------------------------------------
