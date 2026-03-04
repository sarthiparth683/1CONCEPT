function findTheBiggestNumber(arrayOfNumbers) {
  if (!arrayOfNumbers || arrayOfNumbers.length === 0) {
    throw new Error("We need some numbers in the array!");
  }

  let biggestNumber = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > biggestNumber) {
      biggestNumber = arrayOfNumbers[i];
    }
  }

  return biggestNumber;
}

console.log(findTheBiggestNumber([4, 5, 2]));
console.log(findTheBiggestNumber([3, 6, 1, 8, 3, 7, 8, 9]));
console.log(findTheBiggestNumber([36, 67, 84, 8, 3]));
// console.log(findTheBiggestNumber(null));
// ================================================================================
function findTheBiggestNumber2(arrayOfNumbers) {
  return Math.max(...arrayOfNumbers);
}

console.log(findTheBiggestNumber2([36, 67, 84, 8, 3]));
// ==============================================================================
let biggestNum = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return { min, max };
};

console.log(biggestNum([36, 67, 84, 8, 3]));
console.log(biggestNum([3, 6, 1, 8, 3, 7]));
console.log(biggestNum([4, 5, 2]));
