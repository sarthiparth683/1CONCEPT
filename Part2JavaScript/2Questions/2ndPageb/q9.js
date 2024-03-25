// 11578-06  Pattern Printing

function patternPrinting(N) {
  
    for (let i = 1; i <= N; i++) {
        let bag = "";
        for (let j = 1; j <= i; j++) { // j<= i is the concept
            // console.log("*");
            bag = bag + "*" + " ";

        }
        console.log(bag);

    }
}

// patternPrinting(5);
