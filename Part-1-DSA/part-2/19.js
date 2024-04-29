// Your First Pattern
function yourFirstPattern(n) {
    for (let i = 0; i < n; i++) {
        let bag = "";
        for (let j = 0; j < n; j++) {
            bag = bag + "*" + " ";
        }
        console.log(bag);
    };
};
yourFirstPattern(5);