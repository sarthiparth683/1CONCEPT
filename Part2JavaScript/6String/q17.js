// 11578-13   Pattern Printing III-c
function patternPrinting3(N) {
    let bag2 = "";
    for (let k = 1; k <= N; k++) {
        bag2 = bag2 + "*" + " ";
    }
    console.log(bag2);


    for (let i = 1; i <= N; i++) {
        let bag = "";
        for (let j = 1; j <= N; j++) {
            // if (j == 1 || j == N) {   // for line in first and last
            if (j == 1) {
                bag = bag + "*" + " ";
            } else {
                bag = bag + " " + " ";
            }
        }
        console.log(bag);
    }

    if (N != 1) {
        console.log(bag2);
    }

} 
// patternPrinting3(5);



