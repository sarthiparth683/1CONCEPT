// Sum of Indexes
function sumOfIndexes(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let bag = "";
        for (let j = 0; j < M; j++) {
            let sum = i + j;
            bag = bag + sum + " ";
        }
        console.log(bag);
    }
};
sumOfIndexes(3, 2);