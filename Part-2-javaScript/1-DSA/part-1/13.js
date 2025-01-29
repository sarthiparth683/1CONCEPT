// 13. Divisibly by K
function divisibleByK(num, k) {
   for (let i = 1; i <= num; i++) {
      if (i % k == 0) {
         console.log(i);
      }
   }
};
divisibleByK(10,2);