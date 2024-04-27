 // Binary Search - Iterative
 function solve(N, arr, K) 
{
    arr.sort((a, b) => {
        return a - b;
    });

    let start = 0;
    let end = N - 1;
    let count = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === K) {
            count += 1;
            break;
        } else if (arr[mid] < K) {
            start = mid + 1;
        } else if (arr[mid] > K) {
            end = mid - 1;
        }
    }

    if (count !== 0) {
        console.log(1);
    } else {
        console.log(-1);
    }
}