// 11578-15  Pattern of inverted L

// First make Box pattern
function invertedL(N) {

    // this is Box Pattern 
    // let bag2 = "";
    // for (let k = 1; k <= N; k++) {           // inner loop
    //     bag2 = bag2 + "*" + " ";
    // }
    // console.log(bag2);

    // for (let i = 1; i <= N - 2; i++) {
    //     let bag = "";
    //     for (let j = 1; j <= N; j++) {
    //         if (j == 1 || j == N) {
    //             bag = bag + "*" + " ";
    //         } else {
    //             bag = bag + " " + " ";
    //         }
    //     }
    //     console.log(bag);
    // }
    // console.log(bag2);



    // This is Inverted L
    let bag2 = "";
    for (let k = 1; k <= N; k++) {           // inner loop
        bag2 = bag2 + "*" + " ";
    }
    console.log(bag2);

    for (let i = 1; i <= N - 1; i++) {
        let bag = "";
        for (let j = 1; j <= N; j++) {
            if (j == 1 || j == N) {
                bag = bag + "*" + " ";
            } else {
                bag = bag + " " + " ";
            }
        }
        console.log(bag);
    }
  

}


invertedL(5);