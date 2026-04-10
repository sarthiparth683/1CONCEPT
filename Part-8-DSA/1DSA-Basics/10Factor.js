function calculateFactors(inputNumber) {
  if (inputNumber < 1) {
    throw new Error("inputNumber should be greater than zero");
  }

  let result = [];

  for (let i = 1; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
      result.push(i);
    }
  }

  return `Factors of ${inputNumber} are ${result}`;
}

console.log(calculateFactors(10));
console.log(calculateFactors(4));
console.log(calculateFactors(14));
console.log(calculateFactors(35));
// ===========================================================================
