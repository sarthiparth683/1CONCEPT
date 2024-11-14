// Your first 2D Array Problem
function array2D(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let bag = "";
        for (let j = 0; j < M; j++) {
            bag = bag + arr[i][j] + " ";
        }
        console.log(bag);
    }
};
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
array2D(3, 2, arr);