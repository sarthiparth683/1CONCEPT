function calculateFactors(inputNumber) {
  if (inputNumber < 1) {
    throw new Error("inputNumber should be greater than zero");
  }
  // Add validation that inputNumber is a number and it is not a decimal number like 1.5

  let result = [];
  for (let i = 1; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
      result.push(i);
      //console.log(i, "is a factor");
    }
  }

  return result;
}

// console.log('Factors of 4 are', calculateFactors(4));
// console.log('Factors of 14 are', calculateFactors(14));
// console.log('Factors of 35 are', calculateFactors(35));
// ===========================================================================
function factor(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}

// factor(4); // 1,2,4
// factor(14); // 1,2,7,14
// factor(35); // 1,5,7,35
