function invertedL(N) {
    let bag1 = "";
    for (let i = 0; i <= N - 1; i++) {
        bag1 = bag1 + "*" + " ";
    }
    console.log(bag1);



    for (let j = 0; j <= N - 2; j++) {
        console.log("*")
    }

}



// Calling function with value=5;
invertedL(5);

