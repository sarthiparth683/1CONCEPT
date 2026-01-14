// transposing rows into column in new array

function transposeMatrix(inputArray) {
  const numberOfRows = inputArray.length;
  const numberOfColumns = inputArray[0].length;

  const result = [];

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = inputArray[i][j];
    }
  }

  return result;
}

const inputMatrix1 = [
  [3, 4, 8],
  [5, 6, 9],
];

const inputMatrix2 = [
  [3, 4, 8, 11],
  [5, 6, 9, 12],
];

const inputMatrix3 = [
  [3, 4],
  [5, 6],
  [7, 8],
];

const inputMatrix4 = [
  [3, 4],
  [5, 6, 9, 12],
];

// console.log(transposeMatrix(inputMatrix1));
// console.log(transposeMatrix(inputMatrix2));
// console.log(transposeMatrix(inputMatrix3));
// console.log(transposeMatrix(inputMatrix4));
// ===================================================================