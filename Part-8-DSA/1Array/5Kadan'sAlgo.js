function kadane(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either extend the subarray or start fresh
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(kadane([1, 2, 3, 4]));
console.log(kadane([-3, -1, -2]));
console.log(kadane([5]));
// ===========================================================