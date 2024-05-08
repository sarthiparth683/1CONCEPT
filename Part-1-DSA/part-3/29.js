// 11751 - 04 - Number of Occurences in logn
// input:- N=6, K= 3, arr=[2,3,3,3,6,9]
// output:- Number of times K is present in arr (ans = 3)
function solve(N, arr, K) {
    let count = 0;
    let left = 0;
    let right = N - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === K) {
            count++;
            // Replace nested while loops with for loops
            for (let temp = mid - 1; temp >= 0 && arr[temp] === K; temp--) {
                count++;
            }
            for (let temp = mid + 1; temp < N && arr[temp] === K; temp++) {
                count++;
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
solve(6, [2, 3, 3, 3, 6, 9], 3);

//-------------------------------------------------------------------------------------
// function solve(N, arr, K) {
//     let count = 0;
//     let left = 0;
//     let right = N - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === K) {
//             count++;

//             let temp = mid - 1;
//             while (temp >= 0 && arr[temp] === K) {
//                 count++;
//                 temp--;
//             }

//             temp = mid + 1;
//             while (temp < N && arr[temp] === K) {
//                 count++;
//                 temp++;
//             }
//             break;
//         } else if (arr[mid] < K) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     console.log(count);
// }
// solve(6, [2, 3, 3, 3, 6, 9], 3);
//-------------------------------------------------------------------------------------
function solve(N, arr, K) {
    let count = 0;
    let left = 0;
    let right = N - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === K) {
            count++;
            // Replace nested while loops with for loops
            for (let temp = mid - 1; temp >= 0 && arr[temp] === K; temp--) {
                count++;
            }
            for (let temp = mid + 1; temp < N && arr[temp] === K; temp++) {
                count++;
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
solve(6, [2, 3, 3, 3, 6, 9], 3);
