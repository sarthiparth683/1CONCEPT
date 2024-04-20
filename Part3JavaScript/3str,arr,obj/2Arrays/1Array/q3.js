// 11595-01  Your first 2D Array Problem
// 2D Array problem (care about index value)

function array2D(N, M, arr) {
    for (let row = 0; row < N; row++) {  // outer loop
        str = "";
        for (let col = 0; col < M; col++) {   // Inner loop
            str = str + arr[row][col] + " ";

        }
        console.log(str);
    }
}

// array2D(3, 2,
//     [
//         [1, 2],
//         [3, 4],
//         [5, 6]
//     ]);