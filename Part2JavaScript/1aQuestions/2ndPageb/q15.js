// 11578-11   Pattern Printing I

function patternPrintingI(N) {
    let bag = "";
    for (let i = 1; i <= N; i++) {
        bag = bag + "*" + " ";
    }

    console.log(bag);

    for (let k = 1; k <= N - 2; k++) {
        console.log("*");

    }
  
    if (N != 1) {
        console.log(bag);
    }

}

patternPrintingI(5);
