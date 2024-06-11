  // Interview based questions:
// 1.Explain the difference between synchronous and asynchronous code execution in JavaScript. Provide examples of each.
// Difference between synchronous and asynchronous code execution:
// Synchronous code executes line by line, blocking further execution until each operation is complete. Example:


console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous code allows operations to be executed in parallel without blocking the main thread. Example:


console.log("Start");
setTimeout(() => console.log("Middle"), 0);
console.log("End");  

//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// 2.What is the event loop in JavaScript, and how does it contribute to handling asynchronous operations?
// Event loop in JavaScript:
// The event loop is a mechanism that handles asynchronous operations in JavaScript.
// It continuously checks the call stack and task queue, moving tasks from the queue to the stack when the stack is empty.
// This ensures that asynchronous operations like setTimeout, AJAX requests, and event listeners are executed in the appropriate order.
//-----------------------------------------------------------------------------
// 3.Describe the purpose of callback functions in asynchronous JavaScript code. How do they help manage asynchronous tasks?
// Purpose of callback functions:
// Callback functions are used to handle asynchronous tasks by providing a function to be executed once the task is complete.

// They help manage asynchronous code flow by specifying what should happen after the task finishes.

// Example:

function fetchData(callback) {
    // Simulating fetching data asynchronously
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log(data);
});


//-----------------------------------------------------------------------------
// 4.Explain the concept of blocking and non-blocking code execution in the context of JavaScript. How can you ensure that your JavaScript code is non-blocking?
// Blocking vs non-blocking code execution:
// Blocking code execution stops further execution until the current operation is complete, potentially causing delays.
// Non-blocking code allows multiple operations to be executed concurrently, ensuring that the main thread remains responsive.
// To ensure non-blocking code, use asynchronous APIs like Promises, async/await, setTimeout, and event listeners.
//-----------------------------------------------------------------------------
