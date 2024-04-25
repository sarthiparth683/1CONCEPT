// 11595-03  Sum of Indexes
// function sumOfIndexes(N, M, arr) {
//     for (let i = 0; i < N; i++) {
//         let sum = 0;
//         let bag = "";
//         for (let j = 0; j < M; j++) {
//             sum = i + j;
//             bag = bag + sum + " ";
//         }
//         console.log(sum);
//         // console.log(bag);
//     }

    // Modified
  function sumOfIndexes(N,M,arr){
        for(let i=0; i<N; i++){   //outer loop runs 0,1,2,3,.... row wise  addition is also
        // rowwise
            let bag = "";
        for(let j=0; j<M; j++){   //inner loop runs 0,1,2,3,... columns wise 
             let  sum =  i + j ;
              bag = bag + sum + " "; 
             }
           console.log(bag);
        }
        }
sumOfIndexes(3, 2,
    [[1, 2],
    [3, 4],
    [5, 6]]);


    // How i and j is working
    // i     j
    // 0     0
    // 1     1 
    // 2

    // so, it is adding like same previously.
    // 0+0  0+1  0th index  outerloop
    // 1+0  1+1  1st index  outerloop
    // 2+0  2+1  2nd index  outerloop
    


