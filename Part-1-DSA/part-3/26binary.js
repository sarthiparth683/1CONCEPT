// 11751 Binary Search - Iterative
// input :- N=5, arr= [2,-2,0,3,4], K=9
// output :- if (k) is  present in arr print (1) if not present (-1)

// function solve(N, arr, K) {
//     arr.sort((a, b) => {
//         return a - b;
//     });

//     let start = 0;
//     let end = N - 1;
//     let count = 0;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);

//         if (arr[mid] === K) {
//             count += 1;
//             break;
//         } else if (arr[mid] < K) {
//             start = mid + 1;
//         } else if (arr[mid] > K) {
//             end = mid - 1;
//         }
//     }

//     if (count !== 0) {
//         console.log(1);
//     } else {
//         console.log(-1);
//     }
// }
// solve(5, [2, -2, 0, 3, 4], 9);
//-------------------------------------------------------------------------


function solve(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            count = count + 1;
        }

    }
    if (count > 0) {
        console.log("1");
    } else {
        console.log("-1");
    }


}
solve([2, -2, 0, 3, 4],3);