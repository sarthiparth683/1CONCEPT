// 5. Equal 5

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
equalTo(5, 9);