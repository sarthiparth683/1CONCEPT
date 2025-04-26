// 2D-Array
//in js everything is consider as an object so an array is also an typeOf.object
//----------------------------------------------------------------------------------------

//Q1-diagonal1
// function printDiagonals(arr, n) {
//     let str = "";
//   for (let i = 0; i < n; i++) {
//     // str = "";
//     for (let j = 0; j < n; j++) {
//         if (i === j) {
//       str += arr[i][j] + " ";
//         }
//     }
//     // console.log(str);
//   }
//     console.log(str);
// }

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const size = 3;
// printDiagonals(array, size);
//----------------------------------------------------------------------------------------

//Q2-diagonal2
// function printDiagonals(arr, n) {
//     let str = "";
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (i+j === arr.length-1) {
//           str += arr[i][j] + " ";
//         }
//       }
//     }
//     console.log(str);
//   }

//   const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   const size = 3;
//   printDiagonals(array, size);
//----------------------------------------------------------------------------------------

//Q3 1st and last column
// function printDiagonals(arr, n) {
//   // let str = "";
//     for (let i = 0; i < n; i++) {
//         let str = "";
//       for (let j = 0; j < n; j++) {
//         // for (let j = n-1; j >=0; j--) { // descending order
//         if (j===0 || j === n-1  ) {
//           str += arr[i][j] + " ";
//         }
//       }
//       console.log(str);
//     }
//     // console.log(str);
//   }

//   const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   const size = 3;
//   printDiagonals(array, size);
//----------------------------------------------------------------------------------------

//Q4 pint N
// function printDiagonals(arr, n) {

//     for (let i = 0; i < n; i++) {
//         let str = "";
//       for (let j = 0; j < n; j++) {
//         if (j===0 || j === n-1 || i===j) {
//         //   str += arr[i][j] + " ";
//           str += "*" ;
//         }else{
//             str +=  " ";
//         }
//       }
//       console.log(str);
//     }

//   }

//   const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   const size = 3;
//   printDiagonals(array, size);
//----------------------------------------------------------------------------------------

//Q5 pint Z
// function printDiagonals(arr, n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n; j++) {
//       if (i + j === n - 1 || i === 0 || i === n - 1) {
//         // str += arr[i][j] + " ";
//         str += "*" + " ";
//       } else {
//         str += "  ";
//       }
//     }
//     console.log(str);
//   }
// }

// const array = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// const size = 4;
// printDiagonals(array, size);

//----------------------------------------------------------------------------------------

//Q6-Circular traversal
// function printDiagonals(arr, n) {
//     for (let i = 0; i < n; i++) {
//       let str = "";
//       for (let j = 0; j < n; j++) {
//         if (i===0 || j===n-1 || i===n-1 || j===0  ) {
//           str += arr[i][j] + " ";
//         //   str += "*" + " ";
//         } else {
//           str += "  ";
//         }
//       }
//       console.log(str);
//     }
//   }

//   const array = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ];
//   const size = 4;
//   printDiagonals(array, size);

//----------------------------------------------------------------------------------------

//2nd-lecture-23-April
//Q7-zig zag pattern
// function print(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     let str = "";
//     if (i % 2 == 0) {
//       for (let j = 0; j < matrix.length; j++) {
//         str += matrix[i][j] + " ";
//       }
//     } else {
//       for (let j = matrix.length - 1; j >= 0; j--) {
//         str += matrix[i][j] + " ";
//       }
//     }
//     console.log(str);
//   }
// }

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// print(matrix);

//----------------------------------------------------------------------------------------

//Q8-matrix transpose row into column
// function transpose(matrix) {
//   let rows = matrix.length;
//   let cols = matrix[0].length;
//   let result = [];

//   for (let i = 0; i < cols; i++) {
//     result[i] = []; // for new row
//     for (let j = 0; j < rows; j++) {
//       result[i][j] = matrix[j][i];
//     }
//   }
//   return result;
// }

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// console.log(transpose(matrix));

//----------------------------------------------------------------------------------------

//Q9- coil spiral printing

// function circularPrinting(matrix, start, end) {
//     // let result = "";
//   for (let i = start; i < end; i++) {
//     let result = "";
//     for (let j = start; j < end; j++) {
//       if (i == start || j == end - 1 || i == end - 1 || j == start) {
//         result += matrix[i][j];
//       } 
//     //   else {
//         result += " ";
//     //   }
//     }
//     console.log(result);
//   }
// //   console.log(result);
 
// }
// const spiralMatrix = (matrix) => {
//   start = 0;
//   end = matrix.length;
//   while (start < end) {
//     circularPrinting(matrix, start, end);
//     start++;
//     end--;
//     console.log();
//   }
// };
// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// spiralMatrix(matrix);
