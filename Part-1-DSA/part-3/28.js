 // Upper Bound in LogN
 function solve(N, arr, K) 
{
    let low = 0;
    let high = N;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] <= K) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    console.log(low);
}