// Two Sum One Numbers II  

function twoSumsOneNumberII(one, two, three, four, five) {
    let sum1 = one + two;
    let sum2 = three + four;
    let a = sum1 > five;
    let b = sum2 > five;
    if (a || b) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}

twoSumsOneNumberII(1, 2, 3, 4, 5);