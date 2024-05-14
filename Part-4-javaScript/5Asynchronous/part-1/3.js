// Synchronous Execution in JavaScript
// JavaScript executes code in a synchronous manner, meaning it processes one line of code at a time, in the order that it appears in a script.
console.log('1');
console.log('2');
console.log('3');
console.log('4');
// This will log: 1 2 3 4 in order...
//------------------------------------------------------------------------
// Asynchronous Execution in JavaScript
// Asynchronous execution allows JavaScript to perform tasks such as API calls, timeouts, and event listeners without blocking the main thread. This is possible with the help of the browser, which can handle tasks like setTimeout and setInterval in the background.
console.log('1');
setTimeout(() => console.log('string'), 2000);
console.log('3');
// Logs: 1 3 and then "string" after a second
//------------------------------------------------------------------------------
// The Event Loop
// The Event Loop is a mechanism that checks if the call stack is empty and then looks at the task queue. If the queue is not empty, it takes the first event and pushes it to the call stack, which then executes it. This allows JavaScript to perform non-blocking operations.
console.log('Hi');
setTimeout(function cb() { console.log('There'); }, 2000);
console.log('JavaScript');
// This will log: 'Hi','JavaScript' and,then after 5 seconds, 'There'
//--------------------------------------------------------------------------------
// Callbacks and Browser APIs
// JavaScript utilizes browser APIs for handling asynchronous operations. Functions like (((setTimeout and setInterval))) are not part of the JavaScript specification itself, but are provided by the browser. Callbacks are functions passed as arguments to asynchronous functions, to be executed after completion.

// function alertDone() {
//   alert('Done!');
// }
// setInterval(alertDone, 2000);

// setInterval(() => {
//   console.log("sarthi")
// },3000);
// setInterval runs continously...
