// Sum of 1 to N in Loops. (HOW TO FIND SUM IN ANY LOOP ?)

function SumBelowN(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    console.log(sum);
}

// MODIFIED

// function SumBelowN(N) {
//     let sum = 0;  // sum should not be inside the loop
//     for (let i=1; i <= N; i++) {
//         // console.log(i);
//         sum += i;
//         // console.log(sum);
//     }
//     console.log(sum);
// }

SumBelowN(5);
// 15
