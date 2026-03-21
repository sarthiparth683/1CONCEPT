function generatePyramid(inputNumber) {
  // Validation
  if (!Number.isInteger(inputNumber) || inputNumber <= 0) {
    throw new Error("Input must be a positive integer");
  }

  for (let i = 1; i <= inputNumber; i++) {
    let lineContent = "";

    for (let space = 1; space <= inputNumber - i; space++) {
      lineContent = lineContent + " ";
    }

    for (let count = 1; count <= i; count++) {
      lineContent = lineContent + count;
    }

    for (let reverseCount = i - 1; reverseCount >= 1; reverseCount--) {
      lineContent = lineContent + reverseCount;
    }

    console.log(lineContent);
  }
}

generatePyramid(8);
generatePyramid(5);
// generatePyramid("jhj");
generatePyramid(4);

// ==========================================================================
function pyramid(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = num - i; j >= 1; j--) {
      str += "*";
    }
    for (let k = 1; k <= i; k++) {
      str += k;
    }
    for (let l = i - 1; l >= 1; l--) {
      str += l;
    }
    console.log(str);
  }
}

// pyramid(4);
pyramid(5);
// pyramid(10);
// ========================================================================
