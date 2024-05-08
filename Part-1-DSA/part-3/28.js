// upper bound in logn  
//  upper bond  concept :- (upper bond is the smallest index such that arr[i] > X ).
// 1st step sort the array to implement the lower bond
// eg.let arr = [2, 3, 6, 7, 8, 8, 11, 11, 11, 12, 9, 15, 21, 45, 71];
// let X = 6; upper bond = 3;
// let X = 11; upper bond = 10;
// let X = 245; upper bond = 15;
// let X = 8; upper bond = 2;
// let X = 8; upper bond = 2;
// let X = 8; upper bond = 2;
// let X = 8; upper bond = 2;
// let X = 8; upper bond = 2;
// let X = 8; upper bond = 2;
// let X = 8; upper bond = 2;


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
solve(10, [0, 2, 4, 4, 5, 5, 7, 7, 9, 10], 3);