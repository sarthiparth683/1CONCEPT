function equalTo(x, y) {
    let sum = x + y;
    if (sum > 5) {
        console.log("Above 5");
    } else if (sum < 5) {
        console.log("Below 5");
    } else {
        console.log("Equal 5");
    }
};
equalTo(2, 3);

function logicalEvens(one, two) {
    let x = (one % 2 == 0);
    let y = (two % 2 == 0);
    if (x && y) {
        console.log("Both")
    } else {
        console.log("No")
    }
};
logicalEvens(4, 8);