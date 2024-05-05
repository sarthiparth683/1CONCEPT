// Upper Bound in LogN
// input 
// N = 10 , K= 3
// arr = [0,2,4,4,5,5,7,7,9,10]
// output = 2 for this case
function solve(N, arr, K) {
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
solve(10,[0,2,4,4,5,5,7,7,9,10], 3);