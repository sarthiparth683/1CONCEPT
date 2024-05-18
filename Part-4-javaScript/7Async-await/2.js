// Student Activities  
function findSum(arr) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(arr)) {
        let sum = arr.reduce((acc, item) => {
          return acc + item;
        });
        resolve(sum);
      } else {
        reject("Pass an array of numbers only");
      }
    });
  }
  
  function findOdd(arr) {
    return new Promise((res, rej) => {
      if (Array.isArray(arr)) {
        let oddArr = arr.filter((item) => item % 2);
        res(oddArr);
      } else {
        rej("Pass an array of numbers only");
      }
    });
  }
  
  function multiply(arr, value) {
    return new Promise((res, rej) => {
      if (Array.isArray(arr)) {
        let ans = arr.map((item) => item * value);
        res(ans);
      } else {
        rej("Pass an array of numbers only");
      }
    });
  }
  
  let arr = [2, 3, 4, 5];
  //expected output
  // [6,9,12,15]
  //[9,15]
  //24
  //consume the promise using async await
  //----------------------------------------------------------------------
//   Conclusion
// Async/await is a powerful feature that simplifies asynchronous programming in JavaScript. It improves code readability, error handling, and maintainability by providing a synchronous-like syntax for working with promises. Understanding async/await is essential for writing modern and efficient JavaScript applications.