// Odd Sum in Columns // COLUMN IS DIFFERENT
function oddSumColumns(N, M, arr) {   // M times rows 
    for (let i = 0; i < M; i++) {
        let sum = 0;
        for (let j = 0; j < N; j++) {
            if (arr[j][i] % 2 !== 0) {
                sum = sum + arr[j][i];   // first completes [j]
            }
        }
        console.log(sum);
    }
}
let arr = [
    [2, 2, 0],
    [3, 4, 5],
    [1, 2, 3],
    [4, 1, 5],
    [1, 2, 2],
    [1, 2, 3],
    [2, 4, 5]
];
oddSumColumns(7, 3, arr);