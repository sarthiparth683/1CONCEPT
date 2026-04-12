function generatePyramid(inputNumber) {
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

// generatePyramid(5);
// generatePyramid(8);
// generatePyramid(4);
// ========================================================================
// function pyramid(number) {
//   for (let i = 1; i <= number; i++) {
//     let str = "";
//     for (let j = 1; j <= number - i; j++) {
//       str += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//       str += k;
//     }

//     for (let z = i - 1; z >= 1; z--) {
//       str += z;
//     }

//     console.log(str);
//   }
// }

// pyramid(5);
// pyramid(10);
// ========================================================================
function pyramid(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= num - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += k;
    }
    for (let m = i - 1; m >= 1; m--) {
      str += m;
    }
    console.log(str);
  }
}

pyramid(5);
pyramid(10);
pyramid(15);
