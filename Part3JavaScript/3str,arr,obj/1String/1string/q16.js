// 11578-12   Pattern Printing II
function patternPrintingII(N) {
    let bag1 = "";
    for (let k = 1; k <= N; k++) {   // Outer Loop
        bag1 = bag1 + "*" + " ";
    }
    console.log(bag1);                // Outer Loop

    for (let i = 1; i <= N - 2; i++) {  //-2 since 2times outer loop repeat

        let bag2 = "";
        for (let j = 1; j <= N; j++) {
            if (j == 1 || j == N) {           // j== 1 || 2 || N-1,2,3...
                bag2 = bag2 + "*" + " ";
            } else {
                bag2 = bag2 + " " + " ";
            }

        }
        console.log(bag2);
    }

    if (N != 1) {              // Outer Loop
        console.log(bag1);     // Outer Loop
    }                          // Outer Loop

}


// patternPrintingII(5);
