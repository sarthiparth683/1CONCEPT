// Odd Array Sum 

let sum = 0;
function oddArraySum(n, arr){
    for(let i=0; i<=n-1; i++){
        // console.log(arr[i])
     if (arr[i] % 2 != 0){
      sum += arr[i];
    }
    // console.log(sum)
     }
      console.log(sum);
}

// oddArraySum(5, [1,2,3,4,5]);
