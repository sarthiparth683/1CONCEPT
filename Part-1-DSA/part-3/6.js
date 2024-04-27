 // Even Sum in Rows
 function evenSumRows(N,M,arr){
    for(let i=0; i<=N-1; i++ ){
       
       let sum = 0;
        for(let j=0; j<=M-1; j++){
           if(arr[i][j] % 2 === 0){
                sum = sum + arr[i][j];
             }
          
           // console.log(sum);
        }
         console.log(sum);
    }
       
      
   }