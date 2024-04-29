// Square Pattern
function square(N) {
    let bag1 = "";
    for (let i = 0; i < N; i++) {
        bag1 = bag1 + "*" + " ";
    }
    console.log(bag1);

    for (let j = 0; j < N - 2; j++) {
        let bag2 = "";
        for (let k = 0; k <= N - 1; k++) {
            if (k == 0 || k == N - 1) {
                bag2 = bag2 + "*" + " ";
            } else {
                bag2 = bag2 + " " + " ";
            }
        }
        console.log(bag2);
    }




    if (N != 1) {
        console.log(bag1);
    }



}
square(5);