// Lower bound in logn  
//  lower bond  concept :- (lower bond is the smallest index such that arr[i] >= X ).
// 1st step sort the array to implement the lower bond
// eg.let arr = [3, 5, 8, 15, 19, 17];
// let X = 8; lower bond = 2;
// let X = 9;  lower bond = 3;
// let X = 16; lower bond = 4;
// let X = 25;  lower bond = 5; Hypothetical index = 5;
// let X = ; lower bond = ;
// let X = ;  lower bond = ;
// let X = ; lower bond = ;
// let X = ;  lower bond = ;
// let X = ; lower bond = ;
// let X = ;  lower bond = ; 
// let X = ; lower bond = ;
// let X = ;  lower bond = ;

//-----------------------------------------------------------------------------------
// input:- N=5, K=2, arr=[1,1,2,2,5]
// output:- find lower bond of K, if(k is present = (lower bond of K)) => ans = 2 else{K = -1 }
// function solve(N, arr, K) {
//     let low = 0;
//     let high = N - 1;
//     let result = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] == K) {
//             result = mid;
//             high = mid - 1;
//         } else if (arr[mid] < K) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     console.log(result);
// }
// solve(5, [1, 1, 2, 2, 5], 2);
//-------------------------------------------------------------------------------------------
function solve(N, arr, K) {
    let low = 0;
    let high = N - 1;
    let result = -1;
    for (let i = low; i <= high; i++) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === K) {
            result = mid;
            break; // Exit the loop once the target is found
        } else if (arr[mid] < K) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    };
    console.log(result);
};
solve(5, [1, 1, 2, 2, 5], 2);
//---------------------------------------------------------------------


// Math.floor() - method
// console.log(Math.floor(3.8));  // Output: 3
// console.log(Math.floor(7.2));  // Output: 7
// console.log(Math.floor(-2.5)); // Output: -3
// console.log(Math.floor(-9.9)); // Output: -10
// console.log(Math.floor(0));    // Output: 0 (already an integer)
// console.log(Math.floor(10));   // Output: 10 (already an integer)


