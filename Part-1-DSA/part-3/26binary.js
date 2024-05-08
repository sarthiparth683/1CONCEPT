// 11751 Binary Search - Iterative
// input :- N=5, arr= [2,-2,0,3,4], K=9
// output :- if arr[i] = (k) in arr print (1) if not present (-1)
//-------------------------------------------------------------------------
function solve(arr, K) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == K) {
            count = count + 1;
        }

    }
    if (count > 0) {
        console.log("1");
    } else {
        console.log("-1");
    }


}
solve([2, -2, 0, 3, 4], 3);