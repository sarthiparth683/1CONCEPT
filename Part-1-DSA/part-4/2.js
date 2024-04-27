 // Square root of an Integer
 function solve(N) 
{
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