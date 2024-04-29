// Even Sum in Columns
function evenSumColumns(N, M, arr) {
    for (let i = 0; i < M; i++) {
        let sum = 0;
        for (let j = 0; j < N; j++) {
            if (arr[j][i] % 2 == 0) {
                sum = sum + arr[j][i];
            }
        }
        console.log(sum);
    }
};
let arr = [
    [2, 2, 0],
    [3, 4, 5],
    [1, 2, 3],
    [4, 1, 5],
    [1, 2, 2],
    [1, 2, 3],
    [2, 4, 5]
];
evenSumColumns(7, 3, arr);