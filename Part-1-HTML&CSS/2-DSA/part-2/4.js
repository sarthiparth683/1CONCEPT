// Sum of 1 to N
function SumBelowN(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  console.log(sum);
};
SumBelowN(5);