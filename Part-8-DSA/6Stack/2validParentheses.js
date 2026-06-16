function isValid(s) {
  const stack = [];
  // Map closing brackets to their corresponding opening brackets
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    // If the character is an opening bracket (not in our map's keys)
    if (!bracketMap[char]) {
      stack.push(char);
    } 
    // If it is a closing bracket
    else {
      const topElement = stack.pop();
      // If the popped element doesn't match the required opening bracket, it's invalid
      if (bracketMap[char] !== topElement) {
        return false;
      }
    }
  }
  
  // If the stack is empty, all brackets were matched. Otherwise, it's invalid.
  return stack.length === 0;
}

// Usage:
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]"));     // Output: false