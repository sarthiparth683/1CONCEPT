// 11595-04  Even Sum in Rows
function evenSumRows(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let sum = 0;
        for (let j = 0; j < M; j++) {
            // console.log(arr[i][j]);
            // sum = sum + arr[i][j];  // for row sum 
            // sum = sum + arr[j][i];    // for column sum
            if (arr[i][j] % 2 !== 0) {   // for odd sum
                // if (arr[i][j] % 2 == 0) {   // for even sum
                sum = sum + arr[i][j];
            }
            
        }
        console.log(sum);
       
    }


}
evenSumRows(3, 3,
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]])