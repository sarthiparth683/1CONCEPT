// 14. Divisibly by K II
function divisibleByKII(num, k) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % k == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
};
divisibleByKII(10,2);