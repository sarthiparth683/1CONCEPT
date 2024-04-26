// Maximum in array
function maximumInArray(N,arr){
    let max = arr[0];
    for(let i = 0 ;i <=N; i++){
        if(arr[i] > max){
            max = arr[i];
        }
       }
      console.log(max);
}