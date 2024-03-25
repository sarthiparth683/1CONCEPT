// 11578-05   Nested Reverse Pattern

function nestedReversePattern(num) {
    for (let i = 1; i <= num; i++) {
        let bag = "";
        for (let j = 1; j <= num; j++) {
            // for (let j = num; j >= 1; j--) {   // Descending Order
            bag = bag + j + " ";

        }
        console.log(bag);
    }
}

// nestedReversePattern(5);


