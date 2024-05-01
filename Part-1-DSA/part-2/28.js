// Pattern Printing I
function patternPrintingI(N) {
    let str1 = "";
    for (let i = 1; i <= N; i++) {
        str1 = str1 + "*" + " ";
    }
    console.log(str1);

    for (let j = 1; j <= N - 2; j++) {
        console.log("*");
    }
    if (N != 1) {  // because (i=1) has already executed
        console.log(str1);
    }
};
patternPrintingI(5);