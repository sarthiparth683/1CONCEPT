// Odd Sum in Rows
function oddSumRows(N, M, arr) {  // N=rows M = columns
   for (let i = 0; i < N; i++) {
      let sum = 0;
      for (let j = 0; j < M; j++) {
         if (arr[i][j] % 2 !== 0) {
            sum = sum + arr[i][j];
         }
      }
      console.log(sum);
   }
}
let arr = [
   [1, 2, 4, 5, 8],
   [3, 4, 9, 1, 13],
   [5, 6, 1, 12, 0]
];
oddSumRows(3, 5, arr);