 // Painter's Partition Problem
 // input:-
 // t = 2 (no of test case)
// n= 2 , p=2
// n=1 , p=10
// n=4, p=10
//
//  output:-























 function solve(N, arr, P) 
{
    let left = Math.max(...arr);
    let right = arr.reduce((a, b) => a + b, 0); 
    
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        
        if (isValid(arr, N, P, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    console.log(left);
}

function isValid(arr, N, P, time) {
    let painters = 1;
    let current = 0;
    
    for (let i = 0; i < N; i++) {
        if (arr[i] > time) return false;
        if (current + arr[i] > time) {
            painters++;
            current = arr[i];
        } else {
            current += arr[i];
        }
    }
    
    return painters <= P;
}