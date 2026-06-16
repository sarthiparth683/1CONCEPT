function nextGreaterElements(nums) {
  // Initialize result array with -1
  const result = new Array(nums.length).fill(-1);
  const stack = []; // This stack will store the *indices* of the elements

  for (let i = 0; i < nums.length; i++) {
    // While the stack is not empty AND the current number is greater 
    // than the number located at the index stored at the top of the stack
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = nums[i]; // We found the next greater element for 'index'
    }
    // Push the current index onto the stack to find its next greater element later
    stack.push(i);
  }

  return result;
}

// Usage:
console.log(nextGreaterElements([2, 1, 2, 4, 3])); // Output: [4, 2, 4, -1, -1]