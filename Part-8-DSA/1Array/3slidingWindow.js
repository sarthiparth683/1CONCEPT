function maxSumSubarrayOfSizeK(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Step 1: sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Step 2: Slide the window from the k-th element to the end
  for (let i = k; i < arr.length; i++) {
    // Add the next element, remove the first element of the previous window
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3));
// ==========================================================================