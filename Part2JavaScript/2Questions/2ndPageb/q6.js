// 11578-02  Your First Pattern
function yourFirstPattern(n) {
    for (let i = 1; i <= n; i++) {
        // console.log(i);
        let bag = "";
        for (let j = 1; j <= n; j++) {
            bag = bag + "*" + " ";
            // bag = bag + j + " * ";
        }
        console.log(bag);
    }
}

// yourFirstPattern(7);
