// The Peak Point
// t = 2 (no of test case)
// n=3, arr = [10,20,11]
// n=5, arr = [1,3,6,5,4]

// output :- 
// for t1 = 1
// for t2 = 2 

function solve(N, arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(arr.indexOf(max))
};
solve(3, [10, 20, 11]);
solve(5, [1, 3, 6, 5, 4]);