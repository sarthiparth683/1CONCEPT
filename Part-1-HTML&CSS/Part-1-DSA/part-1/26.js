// 26. Odd Sum Below N
function oddSumBelowN(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
};
oddSumBelowN(9);