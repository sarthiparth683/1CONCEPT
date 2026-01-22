function factorial(num) {
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res *= i;
  }
  console.log(res);
}

// factorial(1); // 1
// factorial(2); // 2
// factorial(3); // 6
// factorial(4); // 24
// factorial(0); // 1
// ==========================================================================
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

// console.log("4",calculateFactorial(4));
// console.log("3!", calculateFactorial(3));
// console.log("10!", calculateFactorial(10));
// console.log("0!", calculateFactorial(0));
// console.log("1!", calculateFactorial(1));
// ==============================================================================

function calculateFactorialUsingRecursion(inputNumber) {
  console.log('inputNumber is', inputNumber)
  if (inputNumber < 0) {
    throw new Error("inputNumber should be greater than or equal to zero");
  }

  if (inputNumber === 0 || inputNumber === 1) {
    return 1;
  }

  return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1);
}

// console.log("1!", calculateFactorialUsingRecursion(1)); // 1
// console.log("2!", calculateFactorialUsingRecursion(2)); // 2
// console.log("3!", calculateFactorialUsingRecursion(3)); // 6
// console.log("4", calculateFactorialUsingRecursion(4)); // 24
// console.log("10!", calculateFactorialUsingRecursion(10)); // 3628800
// console.log("0!", calculateFactorialUsingRecursion(0)); // 1
// =====================================================================
// ===========================
// =========================
// ===============================
