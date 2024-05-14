// Event loop:
// The event loop is a continuous loop that repeatedly checks the state of different queues and the call stack. It follows a specific sequence:
// a. Check the Microtask Queue: Execute all pending microtasks in the order they were added. b. Check the Callback Queue: If the call stack is empty, move a task from the callback queue to the call stack and execute it. c. Repeat: The event loop keeps cycling through these steps, allowing asynchronous tasks to be executed while maintaining responsiveness.
// Code Implementation | Examples
// Guess the output
console.log("sync 1");
console.log("sync 2");
Promise.resolve().then(() => {
  console.log("promise resolve 1");
});
Promise.resolve().then(() => {
  console.log("promise resolve 2");
  setTimeout(() => {
    console.log("Inside timeout");
  }, 0);
});
Promise.resolve().then(() => {
  console.log("promise resolve 3");
});
setTimeout(() => {
  console.log("set Timeout 1");
  setTimeout(() => {
    console.log("inside timeout");
  }, 0);
}, 0);
setTimeout(() => {
  console.log("set time out 2");
}, 0);
setTimeout(() => {
  console.log("set time out 3");
}, 0);
console.log("sync 3");
console.log("sync 4");
console.log("sync 1");
console.log("sync 2");
setTimeout(() => {
  console.log("set time out 1");
}, 0);
setTimeout(() => {
  console.log("set Timeout 2");
  Promise.resolve().then(() => {
    console.log("inside promise resolve 1");
  });
}, 0);
setTimeout(() => {
  console.log("set time out 3");
}, 0);
Promise.resolve().then(() => {
  console.log("promise resolve 1");
});
Promise.resolve().then(() => {
  console.log("promise resolve 2");
  setTimeout(() => {
    console.log("Inside timeout 1");
  }, 0);
});
Promise.resolve().then(() => {
  console.log("promise resolve 3");
});
console.log("sync 3");
console.log("sync 4");
//-------------------------------------------------------------------------------------
// Conclusion
// Understanding the difference between synchronous and asynchronous execution is fundamental in JavaScript development. Synchronous execution ensures predictable code flow, while asynchronous execution enhances responsiveness and efficiency, especially in I/O-bound operations. 