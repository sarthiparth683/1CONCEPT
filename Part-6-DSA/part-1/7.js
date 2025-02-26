// 7. Compare Four Numbers
function compareFourNumbers(one, two, three, four) {
    let a = one > two;
    let b = three > four;
    if (a && b) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};
compareFourNumbers(4, 2, 5, 4);