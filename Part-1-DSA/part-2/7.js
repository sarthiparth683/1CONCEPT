// Minimum in array
function minimumInArray(N,arr){
    let min = arr[0];
     for(let i = 0; i<=N; i++){
         if(arr[i] < min){
             min = arr[i]
         }
     }
     console.log(min)
}