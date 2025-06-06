// Async/await simplifies this by allowing us to write asynchronous code in a more straightforward and sequential way, similar to regular synchronous code.
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
//--------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------
// Event loop:
// The event loop is a continuous loop that repeatedly checks the state of different queues and the call stack. It follows a specific sequence:
// a. Check the Microtask Queue: Execute all pending microtasks in the order they were added. b. Check the Callback Queue: If the call stack is empty, move a task from the callback queue to the call stack and execute it. c. Repeat: The event loop keeps cycling through these steps, allowing asynchronous tasks to be executed while maintaining responsiveness.
// Code Implementation | Examples
//-------------------------------------------------------------------------
// console.log("sync 1");
// console.log("sync 2");
// Promise.resolve().then(() => {
//   console.log("promise resolve 1");
// });
//--------------------------------
// Promise.resolve().then(() => {
//   console.log("promise resolve 2");
//   setTimeout(() => {
//     console.log("Inside timeout");
//   }, 0);
// });
//--------------------------------
// Promise.resolve().then(() => {
//   console.log("promise resolve 3");
// });
//--------------------------------
// setTimeout(() => {
//   console.log("set Timeout 1");
//   setTimeout(() => {
//     console.log("inside timeout");
//   }, 0);
// }, 0);
//--------------------------------
// setTimeout(() => {
//   console.log("set time out 2");
// }, 0);
//--------------------------------
// setTimeout(() => {
//   console.log("set time out 3");
// }, 0);
//--------------------------------
// console.log("sync 3");
// console.log("sync 4");
// console.log("sync 1");
// console.log("sync 2");
//--------------------------------
// setTimeout(() => {
//   console.log("set time out 1");
// }, 0);
//--------------------------------
// setTimeout(() => {
//   console.log("set Timeout 2");
//   Promise.resolve().then(() => {
//     console.log("inside promise resolve 1");
//   });
// }, 0);
//--------------------------------
// setTimeout(() => {
//   console.log("set time out 3");
// }, 0);
//--------------------------------
// Promise.resolve().then(() => {
//   console.log("promise resolve 1");
// });
//--------------------------------
// Promise.resolve().then(() => {
//   console.log("promise resolve 2");
//   setTimeout(() => {
//     console.log("Inside timeout 1");
//   }, 0);
// });
//--------------------------------
// Promise.resolve().then(() => {
//   console.log("promise resolve 3");
// });
//--------------------------------
// console.log("sync 3");
// console.log("sync 4");
//-------------------------------------------------------------------------------------
// Conclusion
// Understanding the difference between synchronous and asynchronous execution is fundamental in JavaScript development. Synchronous execution ensures predictable code flow, while asynchronous execution enhances responsiveness and efficiency, especially in I/O-bound operations. 