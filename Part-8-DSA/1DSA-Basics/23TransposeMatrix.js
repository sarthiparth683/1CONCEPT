// transpose Matrix
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
// ------------------------------------------------
console.log(
  transposeMatrix([
    [3, 4, 8],
    [5, 6, 9],
  ]),
);
// -------------------------------------------------
console.log(
  transposeMatrix([
    [3, 4, 8],
    [5, 6, 9],
  ]),
);
// -------------------------------------------------
console.log(
  transposeMatrix([
    [3, 4, 8, 11],
    [5, 6, 9, 12],
  ]),
);
// -------------------------------------------------

console.log(
  transposeMatrix([
    [3, 4],
    [5, 6],
    [7, 8],
  ]),
);
// -------------------------------------------------
console.log(
  transposeMatrix([
    [3, 4],
    [5, 6, 9, 12],
  ]),
);
// -------------------------------------------------
function matrix(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let res = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!res[j]) {
        res[j] = [];
      }

      res[j][i] = matrix[i][j];
    }
  }

  return res;
}

console.log(
  matrix([
    [1, 2, 3],
    [4, 5, 6],
  ]),
);
// -----------------------------------------------------------