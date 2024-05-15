
//-----------------------------------------------------------------------------
// JS execution and Asynchronous JS:
// Introduction
// In JavaScript, understanding synchronous and asynchronous execution is crucial as it impacts how code is processed, especially in scenarios involving I/O operations or long-running tasks.

// Detailed Explanation
// Synchronous execution refers to the default behavior of JavaScript where code is executed sequentially, one after the other. Asynchronous execution, on the other hand, allows certain operations to be deferred, enabling non-blocking behavior.

// Understanding synchronous and asynchronous execution is vital for writing efficient and responsive code, particularly in web development where tasks like fetching data from servers or handling user interactions can be asynchronous to avoid blocking the main thread.

// How JS executes code:
// execution context, execution stack

// Stack:
// Stack is an abstract data structure that follows LIFO (last in first out) principle; that means if we want to remove one element, the lastly added element will be removed first.
//-----------------------------------------------------------------------------
// Javascript is a two-pass system. The code is processed (or compiled or parsed) first. In this first phase, the scopes are set up and the grammar of your code is validated. Then in the second phase, the code is executed.

// Javascript organizes scopes with functions and blocks. In the processing phase, the scope for every identifier (variable) is set.

// In a lexically scoped language (which Javascript is), all of the identifiers & scopes that we dealing with, are determined in the first pass (compile-time). The decisions that I make about scope are author time decisions. When I write a function & put a variable there, it means that the variable is always gonna be scoped to that function. The place where the variable "sits" physically in your code and the variables that "surrounds" it physically is important.

// Another, important thing about lexical scopes is that if the compiler cannot find a variable's declaration within the scope, it looks up to its parent's and ancestor's scope.

// In a non-strict environment, if a variable is used and never declared, JS auto-declares it in the global scope. it's a bad part of JS. We should always operate in strict mode.
//-----------------------------------------------------------------------------
// IIFE - Immediately invoked function expression
// MDN

// We keep our code inside a function, in order to prevent pollution of the global scope. We execute it immediately to make sure that our code actually runs.
(function () {
    // our code here
  })();
  
//-----------------------------------------------------------------------------
// setTimeout()
// The global setTimeout() method sets a timer that executes a function or specified piece of code once the timer expires.

// The returned timeoutID is a positive integer value that identifies the timer created by the call to setTimeout(). This value can be passed to [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout) to cancel the timeout.

// Syntax:
let id = setTimeout(function, delay);

//to  clear the timeout
clearTimeout(id);

//-----------------------------------------------------------------------------
// setInterval()
// The setInterval() method, offered on the [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) and [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

// This method returns an interval ID that uniquely identifies the interval, so you can remove it later by calling [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval).

// Syntax:
setInterval(function, delay);

//to  clear the time interval
clearInterval(id);

//-----------------------------------------------------------------------------
// Blocking Code VS Non-Blocking Code
// As JS is a synchronous language, it executes code line by line. So if there is a block of code that will take some time, in that case, it will block the execution of the rest of the part till that duration.
console.log("hi");
for (let i = 0; i < 7000000000; i++) {}
console.log("Welcome to masai School.");

//In this code the console of "Welcome to masai School." is executed only after the completion of the loop.
// But this kind of behavior is not always good for user experience.

// To overcome this issue JS takes the help of browser API to execute tasks ( that might take some time )asynchronously.
console.log("hi");
setTimeout(function () {
  for (let i = 0; i < 7000000000; i++) {}
}, 0);
console.log("Welcome to masai School.");
// Once JS encounters any asynchronous code it gives it to the browser API and it is registered along with a callback function to be executed when the task completes.

// When the time is over, the code is moved to the callback queue or microtask queue based on the priority of that task.

// Microtask Queue: Holds microtasks, such as Promise callbacks and Mutation Observer callbacks. These tasks have higher priority than regular tasks and are executed before regular tasks.
// Callback Queue: Holds tasks like timers, network responses, and user interaction events. These tasks are executed after microtasks.
//-----------------------------------------------------------------------------
// Event loop:
// The event loop is a continuous loop that repeatedly checks the state of different queues and the call stack. It follows a specific sequence:

// a. Check the Microtask Queue: Execute all pending microtasks in the order they were added. b. Check the Callback Queue: If the call stack is empty, move a task from the callback queue to the call stack and execute it. c. Repeat: The event loop keeps cycling through these steps, allowing asynchronous tasks to be executed while maintaining responsiveness.


//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
// Conclusion
// Understanding the difference between synchronous and asynchronous execution is fundamental in JavaScript development. Synchronous execution ensures predictable code flow, while asynchronous execution enhances responsiveness and efficiency, especially in I/O-bound operations.
//-----------------------------------------------------------------------------

