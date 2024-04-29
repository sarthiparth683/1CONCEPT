// Even Sum in Rows
function evenSumRows(N, M, arr) {  // outer loop 3 times
   for (let i = 0; i < N; i++) {
      let sum = 0;
      for (let j = 0; j < M; j++) {
         if (arr[i][j] % 2 === 0) {  // inner loop 5 times
            sum = sum + arr[i][j];
         }
      }
      console.log(sum);
   }
};
let arr = [
   [1, 2, 4, 5, 8],
   [3, 4, 9, 1, 13],
   [5, 6, 1, 12, 0]
];
evenSumRows(3, 5, arr);