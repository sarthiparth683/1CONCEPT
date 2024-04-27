// Your first 2D Array Problem
function array2D(N,M,arr){
    for(let i = 0; i<N; i++){
        let bag = "";
        for(let j=0; j<M; j++){
            bag = bag + arr[i][j] + " ";
        }
        console.log(bag)
    }
     
       
    }