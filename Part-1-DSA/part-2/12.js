// Odd Array Sum
function oddArraySum(n, arr){
    let sum = 0;
    for(let i=0; i<=n-1; i++){
     if (arr[i] % 2 !== 0){
      sum += arr[i];
      }
    //   console.log(sum);
     }
      console.log(sum);
}