function calculateSumOfDigits(inputNumber) {
  if (inputNumber < 1) {
    throw new Error("inputNumber must be a positive number");
  }

  const inputNumberAsString = inputNumber.toString();
  const splittedInputString = inputNumberAsString.split("");
  let sumOfDigits = 0;
  splittedInputString.forEach((num) => {
    // sumOfDigits = sumOfDigits + parseInt(num); // or
    sumOfDigits = sumOfDigits + Number(num);
  });
  return sumOfDigits;
}

console.log(calculateSumOfDigits(12));
console.log(calculateSumOfDigits(23));
console.log(calculateSumOfDigits(456));
// ---------------------------------------------------
function calculateSumOfDigits2(inputNumber) {
  let number = inputNumber;
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
