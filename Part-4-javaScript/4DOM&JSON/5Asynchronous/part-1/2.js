// Synchronous Execution in JavaScript
// JavaScript executes code in a synchronous manner, meaning it processes one line of code at a time, in the order that it appears in a script.
// console.log('1');
// console.log('2');
// console.log('3');
// console.log('4');
// This will log: 1 2 3 4 in order...
//-------------------------------------------------------------------------------------
// Asynchronous Execution in JavaScript
// Asynchronous execution allows JavaScript to perform tasks such as API calls, timeouts, and event listeners without blocking the main thread. This is possible with the help of the browser, which can handle tasks like setTimeout and setInterval in the background.
console.log('1');
setTimeout(() => console.log('string1'), 1000);
console.log('3');
//--------------------------------------------------------------------------------------
// The Event Loop
// The Event Loop is a mechanism that checks if the call stack is empty and then looks at the task queue. If the queue is not empty, it takes the first event and pushes it to the call stack, which then executes it. This allows JavaScript to perform non-blocking operations.
console.log('Hi');
setTimeout(() => console.log('String2'), 1000);
console.log('JavaScript');
// This will log: 'Hi','JavaScript' and,then after 1 seconds, 'string2'.
//---------------------------------------------------------------------------------------
// Callbacks and Browser APIs
// function alertDone() {
//     alert('Done!');
// }
// setInterval(alertDone, 1000);

// setInterval(() => {
//     console.log("sarthi")
// }, 1000);

//------------------------------------------------------------------------------------
// SetTimeout and SetInterval
// setTimeout allows you to execute a function once after a specified period.
// setInterval repeatedly executes a function at every given time-interval until it is stopped.
// SetTimeout Example:-
// setTimeout(() => {
//     console.log('This message is shown after 1 seconds.');
// }, 1000);
//------------------------------------------------------------------------------------
// SetInterval Example:-
// setInterval runs continously...
// setInterval(() => {
//     console.log('This message appears every 1 seconds.');
// }, 1000);
//------------------------------------------------------------------------------------

