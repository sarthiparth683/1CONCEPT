function calculateFactorial(inputNumber) {
  if (inputNumber < 0) {
    throw new Error("inputNumber should be greater than or equal to zero");
  }

  let result = 1;
  for (let i = 1; i <= inputNumber; i++) {
    result *= i;
  }
  return result;
}

console.log(calculateFactorial(1));
console.log(calculateFactorial(2));
console.log(calculateFactorial(3));
console.log(calculateFactorial(4));
console.log(calculateFactorial(5));
console.log(calculateFactorial(7));
console.log(calculateFactorial(0));
// ==============================================================================

function calculateFactorialUsingRecursion(inputNumber) {
  if (inputNumber < 0) {
    throw new Error("inputNumber should be greater than or equal to zero");
  }

  if (inputNumber === 0 || inputNumber === 1) {
    return 1;
  }

  return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1);
}

console.log(calculateFactorialUsingRecursion(1)); // 1
console.log(calculateFactorialUsingRecursion(2)); // 2
console.log(calculateFactorialUsingRecursion(3)); // 6
console.log(calculateFactorialUsingRecursion(4)); // 24
console.log(calculateFactorialUsingRecursion(10)); // 3628800
console.log(calculateFactorialUsingRecursion(0)); // 1
// ============================================================================
