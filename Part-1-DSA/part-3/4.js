// Sum of Rows
function sumOfRows(N,M,arr){
    for(let i=0; i<=N-1; i++){
        let sum =0;
        for(let j=0; j<=M-1; j++){
            sum = sum + arr[i][j] ;
           
        }
         console.log(sum);
    }
    
    
    
}