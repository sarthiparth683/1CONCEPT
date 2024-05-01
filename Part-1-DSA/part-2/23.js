// Pattern of N
function patternOfN(N) {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        let bag = "";
        for (let j = 1; j <= N; j++) {
            count = count + 1;
            bag = bag + count + " ";
        }
        console.log(bag);
        // console.log(typeof(bag));
    }
};
patternOfN(5);