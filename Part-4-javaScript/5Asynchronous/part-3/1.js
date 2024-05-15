// JS execution and Asynchronous JS:
// Detailed Explanation
// Synchronous execution refers to the default behavior of JavaScript where code is executed sequentially, one after the other.
// Asynchronous execution, on the other hand, allows certain operations to be deferred, enabling non-blocking behavior.
//-------------------------------------------------------------------------------------
// How JS executes code:
// execution context, execution stack
// Resources:
// ** Slide: https://docs.google.com/presentation/d/15S6aj3Jn5N8dlWRHscc3w3fASUCoCf7FxP18g6tX8Wg/edit?usp=sharing
//------------------------------------------------------------------------------------
// In a lexically scoped language (which Javascript is), all of the identifiers & scopes that we dealing with, are determined in the first pass (compile-time).
// Another, important thing about lexical scopes is that if the compiler cannot find a variable's declaration within the scope, it looks up to its parent's and ancestor's scope.
//------------------------------------------------------------------------------------
// IIFE - Immediately invoked function expression
// We keep our code inside a function, in order to prevent pollution of the global scope. We execute it immediately to make sure that our code actually runs.
(function () {
  // our code here
});
//-------------------------------------------------------------------------
// setTimeout()
// The global setTimeout() method sets a timer that executes a function or specified piece of code once the timer expires.
// The returned timeoutID is a positive integer value that identifies the timer created by the call to setTimeout().
// **This value can be passed to [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout) to cancel the timeout.
// Syntax:
// let id = setTimeout(function () { }, delay);
//to  clear the timeout
// clearTimeout(id);
//------------------------------------------------------------------------------------
// setInterval()
// The setInterval() method, offered on the [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) and [Worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// This method returns an interval ID that uniquely identifies the interval, so you can remove it later by calling [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval).
// Syntax:
// setInterval(function () { }, delay);
//to  clear the time interval
// clearInterval(id);
//----------------------------------------------------------------------------------------
// Blocking Code VS Non-Blocking Code
// As JS is a synchronous language, it executes code line by line. So if there is a block of code that will take some time, in that case, it will block the execution of the rest of the part till that duration.

// console.log("hi");
// for (let i = 0; i < 7000000000; i++) { }
// console.log("Welcome to masai School.");
//In this code the console of "Welcome to masai School." is executed only after the completion of the loop.
// But this kind of behavior is not always good for user experience.
// To overcome this issue JS takes the help of browser API to execute tasks ( that might take some time )asynchronously.

// console.log("hi");
// setTimeout(function () {
//   for (let i = 0; i < 7000000000; i++) { }
// }, 0);
// console.log("Welcome to masai School.");
// Once JS encounters any asynchronous code it gives it to the browser API and it is registered along with a callback function to be executed when the task completes.
// When the time is over, the code is moved to the callback queue or microtask queue based on the priority of that task.
// Microtask Queue: Holds microtasks, such as Promise callbacks and Mutation Observer callbacks. These tasks have higher priority than regular tasks and are executed before regular tasks.
// Callback Queue: Holds tasks like timers, network responses, and user interaction events. These tasks are executed after microtasks.
//---------------------------------------------------------------------------------------- 