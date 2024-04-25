function evenArray(arr) {
   // Even Array
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         console.log(arr[i]);
      }
   }

   //  odd Array
   for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 != 0) {
         console.log(arr[j]);
      }
   }
}
evenArray([1, 2, 3, 4, 5]);
