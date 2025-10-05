// Synchronous - Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

// Asynchronous - Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// ------------------------------------------------
// SetTimeout and SetInterval
// setTimeout allows you to execute a function once after a specified period.
// setInterval repeatedly executes a function at every given time-interval until it is stopped.

// setInterval(() => {
//     console.log("Message")
// }, 1000);
// setTimeout(() => {
//     console.log("SetTimeOut")
// }, 1000);
//------------------------------------------------------------------------------------

// Async Await
// function findSum(arr) {
//   return new Promise((resolve, reject) => {
//     if (Array.isArray(arr)) {
//       let sum = arr.reduce((acc, item) => {
//         return acc + item;
//       }, 0);
//       resolve(sum);
//     } else {
//       reject("Pass an array of numbers only1");
//     }
//   });
// }

// function findOdd(arr) {
//   return new Promise((res, rej) => {
//     if (Array.isArray(arr)) {
//       let oddArr = arr.filter((item) => item % 2);
//       res(oddArr);
//     } else {
//       rej("Pass an array of numbers only2");
//     }
//   });
// }

// function multiply(arr, value) {
//   return new Promise((res, rej) => {
//     if (Array.isArray(arr)) {
//       let ans = arr.map((item) => item * value);
//       res(ans);
//     } else {
//       rej("Pass an array of numbers only3");
//     }
//   });
// }

// // let arr = "Hello World!";
// let arr = [1, 2, 3, 4, 5];
// async function output() {
//   try {
//     let A1 = await findSum(arr);
//     let A2 = await findOdd(arr);
//     let A3 = await multiply(arr, 5);
//     console.log("sum", A1);
//     console.log("Odd", A2);
//     console.log("Multiply", A3);
//   } catch (err) {
//     console.log(err);
//   }
// }
// output();
//-----------------------------------------------------------------------------------------
//   Conclusion
// Async/await is a powerful feature that simplifies asynchronous programming in JavaScript. It improves code readability, error handling, and maintainability by providing a synchronous-like syntax for working with promises. Understanding async/await is essential for writing modern and efficient JavaScript applications.

//------------------------------------------------------------------------------------------
