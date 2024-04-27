 // Number of Occurences in logn
 function solve(N, arr, K) 
{
    let count = 0;
    let left = 0;
    let right = N - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === K) {
            count++;
            
            let temp = mid - 1;
            while (temp >= 0 && arr[temp] === K) {
                count++;
                temp--;
            }
           
            temp = mid + 1;
            while (temp < N && arr[temp] === K) {
                count++;
                temp++;
            }
            break; 
        } else if (arr[mid] < K) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log(count);
}