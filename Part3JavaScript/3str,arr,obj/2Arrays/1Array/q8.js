// Sum of Array  
function ArraySum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
   }
   console.log(sum);
}
ArraySum([1, 2, 3, 4, 5]);