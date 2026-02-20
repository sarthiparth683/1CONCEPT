function calculatePower(base, exponent) {
  // Check if base and exponent and positive integers
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
    console.log(result);
  }

  return result;
}

// console.log("calculatePower(2, 3)", calculatePower(2, 3));
// console.log("calculatePower(5, 4)", calculatePower(5, 4));
// ======================================================================
// console.log(2 ** 3);
// console.log(Math.pow(2, 3));
// console.log(5 ** 4);
// console.log(Math.pow(5, 4));
// ==========================================================
function power(base, exponent) {
  let res = 1;
  for (let i = 1; i <= exponent; i++) {
    res *= base;
  }
  console.log(res);
}

// power(2, 3);
// power(5, 4);
