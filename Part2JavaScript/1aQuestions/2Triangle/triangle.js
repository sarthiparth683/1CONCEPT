function rightAngleTriangle(N) {
    for (let i = 1; i <= N; i++) {
        let bag = "";
        for (let j = 1; j <= i; j++) {
            bag = bag + i + " ";
            //   bag = bag + j + " ";
        }
        console.log(bag);
    }
}

// calling function
rightAngleTriangle(5);
