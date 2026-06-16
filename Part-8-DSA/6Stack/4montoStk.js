function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  const stack = []; // Stores indices to represent a monotonically decreasing stack

  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i];
    
    // Maintain monotonic decreasing order:
    // If we find a warmer temperature, pop cooler days and calculate the difference
    while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
      const prevDayIndex = stack.pop();
      answer[prevDayIndex] = i - prevDayIndex; // Number of days waited
    }
    
    stack.push(i);
  }
  
  return answer;
}

// Usage:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); 
// Output: [1, 1, 4, 2, 1, 1, 0, 0]