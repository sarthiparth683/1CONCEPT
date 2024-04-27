// 8. Compare Two Sum
function twoSumsOneNumberII(one, two, three, four, five, six) {
    let sum1 = one + two;
    let sum2 = four + five;
    let a = sum1 > three;
    let b = sum2 > six;
    if (a && b) {
        console.log("Yes");
    } else {
        console.log("No")
    }
};
twoSumsOneNumberII(1, 2, 3, 4, 5, 6);