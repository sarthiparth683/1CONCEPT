// Odd Array Sum
function oddArraySum(n, arr) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
};
oddArraySum(5, [1, 2, 3, 4, 5]);