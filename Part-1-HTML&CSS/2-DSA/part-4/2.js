// Square root of an Integer
// input :- 
// t = 2 (no of test cases)
// N = 4 
// N= 8 

// output :-
// 2
// 2




function solve(N) {
    let left = 0;
    let right = N;
    let result = 0;

    while (left <= right) {
        let mid = (left + right) >> 1;

        if (mid * mid === N) {
            result = mid;
            break;
        } else if (mid * mid < N) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log(result);
}
solve(4);
solve(8);