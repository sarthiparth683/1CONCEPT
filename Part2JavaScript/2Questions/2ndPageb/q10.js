// 11578-07  Pattern of N
function patternOfN(N) {
    let count = 0;            // for counting number 
for (let i = 1; i <=N; i++) {
    let bag = "";
    for (let j = 1; j <=N; j++) { // this runs 4 times in each line
       count = count + 1;           // adding +1 in count
       bag = bag + count + " ";
    }
    console.log(bag);
}

   
} 

// patternOfN(5);
