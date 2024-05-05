 // Lower bound in logn
 // input:- N=5, K=2, arr=[1,1,2,2,5]
 // output:- if(k is present = (lower bond of K)) => ans = 2
 // else{K = -1 }
 // lower bond and upper bond concept
 function solve(N, arr, K) 
{  
    let low = 0;
    let high = N - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] == K) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] < K) {
            low = mid + 1;
        } else { 
            high = mid - 1;
        }
    }
    console.log(result);
}
solve(5, [1,1,2,2,5], 2);