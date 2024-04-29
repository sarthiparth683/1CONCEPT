// Pattern of Inverted L
function invertedL(N) {
    let bag1 = "";
    for (let k = 1; k <= N; k++) {
        bag1 = bag1 + "*" + " ";
    }
    console.log(bag1);

    for (let i = 1; i <= N - 1; i++) {   // -1 because of bag1
        console.log("*")
    }
};
invertedL(5);