// Even Array
function evenArray(n, arr) {
   for (let i = 0; i < n; i++) {
      if (arr[i] % 2 == 0) {
         console.log(arr[i]);
      }
   }
};
evenArray(5, [1, 2, 3, 4, 5]);