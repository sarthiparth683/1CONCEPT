// 11578-04  Even Sum Again  
function evenSumAgain(num) {
    for (let i = 1; i <= num; i++) {
        // console.log(i);
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            //    console.log(j);

            if (j % 2 == 0) {
                // console.log(j);
                sum = sum + j;
            }

        }
        console.log(sum);

    }


}
evenSumAgain(4);
