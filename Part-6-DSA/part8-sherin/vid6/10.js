// leet code -  Majority element
let nums = [2, 2, 1, 1, 2, 2, 3];
var majorityElement = function (nums) {
  let ans = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      ans = nums[i];
      count = 1;
    } else if (ans == nums[i]) count++;
    else count--;
  }
  return ans;
};
console.log(majorityElement(nums)); // 2 
