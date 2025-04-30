// Sliding Window
function maxSumSubArray(arr, n, k) {
  let sum = 0;
  for (let i = 0; i<k; i++) {
    sum += arr[i];
  }

  let maxsum = sum;
  for (let i=1; i<n-k+1; i++) {
    sum = sum - arr[i - 1] + arr[i + k - 1];
    maxsum = Math.max(maxsum, sum);
  }
  console.log(maxsum);
}

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let k = 4;
maxSumSubArray(arr, 9, k);
