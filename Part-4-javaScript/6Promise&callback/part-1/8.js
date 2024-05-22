// Async/await:
// Introduction
// Async/await is a syntactic feature introduced in JavaScript to simplify asynchronous programming. It provides a more synchronous-style coding approach while still allowing the non-blocking execution of asynchronous operations.
// Detailed Explanation
// Async/await was introduced in JavaScript to make asynchronous code easier to read and write, especially when dealing with promises.
// Before async/await, chaining promises using .then() could make the code harder to  understand. It required nesting multiple callbacks, which could become confusing and messy.
// Async/await simplifies this by allowing us to write asynchronous code in a more straightforward and sequential way, similar to regular synchronous code.
// Benefits of async/await:
// Easier to understand: Async/await makes the code easier to read and follow. It removes the need for complex .then() chains, so the code looks more like a step-by-step sequence.
// Simpler error handling: Async/await makes it easier to handle errors. Instead of attaching .catch() at every step, we can use a single try-catch block to handle errors within the async function.
// Reduces callback complexity: Async/await avoids excessive nesting of callbacks, which can make the code hard to follow. It allows for a flatter and more organized code structure.
// Simplifies debugging: Debugging async/await code is easier because we can pause execution at each await statement, helping us see the flow of execution more clearly.
//------------------------------------------------------------------------------------
// Code Implementation | Examples
const input = [1, 2, 3, 4, 5];
async function performTasks() {
  try {
    const result1 = await asynchronous1(input);
    const result2 = await asynchronous2(result1);
    const result3 = await asynchronous3(result2);
    console.log("Final result:", result3);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
performTasks();

function multiplyer(arr, value) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("the first argument has to be an array of numbers only.");
    } else if (typeof value !== "number") {
      reject(
        `the second argument has to be a number but received ${typeof value}`
      );
    } else {
      let ans = arr.map((item) => item * value);
      resolve(ans);
    }
  });
};

function findOdd(arr) {
  //filter all the odd elements and create a new array
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("the first argument has to be an array of numbers only.");
    } else {
      let ans = arr.filter((item) => item % 2);
      resolve(ans);
    }
  });
  //invoke the cb with that new array having only odd elements
}

function findSum(arr) {
  //find the sum of all the elements
  //invoke the cb with the sum;
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("the first argument has to be an array of numbers only.");
    } else {
      let sum = arr.reduce((acc, item) => acc + item);
      resolve(sum);
    }
  });
};
//findSum(arr1,(sum)=>{console.log(sum)})

//Error Handling callback;

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
//multiplyer
//[5,10,15,20,25,30,35,40]

multiplyer(arr2, 5)
  .then(findOdd)
  .then(findSum)
  .then((sum) => {
    console.log(sum);
  })
  .catch((error) => {
    console.log(error);
  });
