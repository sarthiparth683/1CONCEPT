 // Lower bound in logn
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