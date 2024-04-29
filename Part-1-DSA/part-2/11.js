// Sum of Array
function ArraySum(n, arr) {
   let sum = 0;
   for (let i = 0; i < n; i++) {
      sum = sum + arr[i];
   }
   console.log(sum);
};
ArraySum(5, [1, 2, 3, 4, 5]);