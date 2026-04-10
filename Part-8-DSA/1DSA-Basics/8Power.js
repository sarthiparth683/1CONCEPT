function calculatePower(base, exponent) {
  if (base < 0 || exponent < 0) {
    throw new Error("input Base and Exponent should be a Positive number");
  }

  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }

  return result;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(5, 4));
// console.log(calculatePower(5, -9));
// ====================================================
console.log(Math.pow(2, 3));
console.log(2 ** 3);
console.log(Math.pow(5, 3)); // 5 to the power 3
console.log(5 ** 3);
// ====================================================
