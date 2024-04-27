// Sum of Indexes
function sumOfIndexes(N,M,arr){
    for(let i=0; i<N; i++){   //outer loop runs 0,1,2,3,.... row wise  addition is also rowwise
        let bag = "";
    for(let j=0; j<M; j++){   //inner loop runs 0,1,2,3,... columns wise 
         let  sum =  i + j ;
          bag = bag + sum + " "; 
         }
       console.log(bag);
    }
    
    } 