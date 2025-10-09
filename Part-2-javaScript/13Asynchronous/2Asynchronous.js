// Synchronous - Code runs line by line, Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

// console.log("Start");

// function syncTask() {
//   console.log("Task is running...");
// }

// syncTask();

// console.log("End");

// ------------------------------------------------------------------------------------------------------------------------
// Asynchronous -  code that doesn't block the main thread Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// console.log("E");
//--------------------------------------------------------------
// JS uses an event loop to handle async operations without blocking the code.
// -----------------------------------------------------
// SetTimeout and SetInterval
// setTimeout allows you to execute a function once after a specified period.
// setInterval repeatedly executes a function at every given time-interval until it is stopped.

// setInterval(() => {
//     console.log("setInterval")
// }, 1000);

// setTimeout(() => {
//     console.log("SetTimeOut")
// }, 1000);
//------------------------------------------------------------------------------------
// what is a callback function?

// In JavaScript, a callback function is simply a function passed as an argument to another function, which is then executed later — usually after some task is completed.

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback(); // calling the callback function
// }

// function work() {
//   console.log("Work!");
// }

// greet("Sarthi", work);
// --------------------------------------------

//  what are drawback of using callback?
//  harder to manage when we have the nested callback (known as callback hell)

// doSomething(() => {
//   doSomethingElse(() => {
//     doMore(() => {
//       console.log("Done!");
//     });
//   });
// });

// ---------------------------------------------------------------------------------

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
//--------------------------------
// what is the use of async and await ? if you forgot to provide await

// In JavaScript, async and await are used to handle asynchronous operations (like fetching data from an API) in a way that looks and feels synchronous — making the code easier to read and write.

// When you declare a function as async, it automatically returns a Promise.
// The await keyword can only be used inside an async function.
// It pauses the execution of the function until the Promise resolves.

// What happens if you forget to use await? If you forget await, the function won’t wait for the Promise to resolve — it will continue running immediately.
//------------------------------------------------------------------------------------------
