// ### Question 5: Find nth Fibonacci number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1.

let fib = function (n) {
  if (n < 2) {
    return n;
  }

  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }  
  return next;
};

// Fibonacci Sequence: 0 1 1 2 3 5 8...
console.log(fib(5)); // 5
console.log(fib(10)); // 55
