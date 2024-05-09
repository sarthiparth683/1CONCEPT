// Synchronous Execution in JavaScript

// expand_less
// JavaScript executes code in a synchronous manner, meaning it processes one line of code at a time, in the order that it appears in a script. This behavior ensures a predictable execution flow, which is crucial for programming logic.

// Example

console.log('1');
console.log('2');
console.log('3');
console.log('4');
// This will log: 1 2 3 4 in order

//---------------------------------------------------------------


// Asynchronous Execution in JavaScript

// expand_less
// Asynchronous execution allows JavaScript to perform tasks such as API calls, timeouts, and event listeners without blocking the main thread. This is possible with the help of the browser, which can handle tasks like setTimeout and setInterval in the background.

// Example

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// Logs: 1 3 and then 2 after a second
//---------------------------------------------------------------
// The Event Loop

// expand_less
// The Event Loop is a mechanism that checks if the call stack is empty and then looks at the task queue. If the queue is not empty, it takes the first event and pushes it to the call stack, which then executes it. This allows JavaScript to perform non-blocking operations.

// Example

console.log('Hi');
setTimeout(function cb() { console.log('There'); }, 5000);
console.log('JavaScript');
// This will log: 'Hi' 'JavaScript' and, after 5 seconds, 'There'
//---------------------------------------------------------------

// Callbacks and Browser APIs

// expand_less
// JavaScript utilizes browser APIs for handling asynchronous operations. Functions like setTimeout and setInterval are not part of the JavaScript specification itself, but are provided by the browser. Callbacks are functions passed as arguments to asynchronous functions, to be executed after completion.

// Example

function alertDone() {
  alert('Done!');
}
setTimeout(alertDone, 1000);
// Alerts 'Done!' after 1000 milliseconds