// 11578-14  Triangle Pattern

function rightAngleTriangle(N) {
    for (let i = 1; i <= N; i++) {  // for 5 times use Upper loop
        //    console.log(i);
        let bag = "";
        for (let j = 1; j <= i; j++) {  // for N*N times use inner loop
            // console.log(j);
            // bag = bag + j + " ";    // try this for diff. result
            bag = bag + i + " ";

        }
        console.log(bag);

    }

 


}


// rightAngleTriangle(5);
