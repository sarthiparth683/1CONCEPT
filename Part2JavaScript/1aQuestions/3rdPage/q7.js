// 11595-06 Vowels in Rows

function vowelsInRows(N, M, arr) {
   
    for (let i = 0; i < N; i++) {
        let count = 0;
        for (let j = 0; j < M; j++) {
            if (arr[i][j] == "a" || arr[i][j] == "e" || arr[i][j] == "i" || arr[i][j] == "o" || arr[i][j] == "u") {
                count = count + 1;
            }
        }

        if (count > 0) {
            console.log("yes");
        } else {
            console.log("no");
        }

    }
}

vowelsInRows(3, 2,
    [['a', 'b'],
    ['c', 'd'],
    ['e', 'f']])

