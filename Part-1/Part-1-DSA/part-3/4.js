// Sum of Rows
function sumOfRows(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let sum = 0;
        for (let j = 0; j < M; j++) {
            sum = sum + arr[i][j];     // first completes 1st i.e [i] then [j]
        }
        console.log(sum);
    }
};
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
sumOfRows(3, 2, arr);