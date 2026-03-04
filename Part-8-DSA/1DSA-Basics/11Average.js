function calculateAverage(inputArray) {
  let sumOfElements = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sumOfElements += inputArray[i];
  }

  let result = sumOfElements / inputArray.length;
  return result;
}

console.log(calculateAverage([1, 2, 4]));
console.log(calculateAverage([1, 2, 7, 14]));
console.log(calculateAverage([1, 5, 7, 3]));
// ================================================================================
