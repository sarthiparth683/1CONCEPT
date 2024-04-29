// Pattern Printing II
function patternPrintingII(N) {
    for (let i = 1; i <= N; i++) {
        let bag = "";
        for (let j = 1; j <= N; j++) {
            if (j == 1 || j == 3 || j == N) {
                bag = bag + "*" + " ";
            } else {
                bag = bag + " " + " ";
            }
        }
        console.log(bag);
    }

    let str1 = "";
    for (let i = 1; i <= N; i++) {
        str1 = str1 + "*" + " ";
    }
    console.log(str1);
};
patternPrintingII(5);