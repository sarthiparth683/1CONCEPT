// ** Synchronous Execution and Asynchronous Execution - Event loop seprates them first and send them to webApi then in promises and fetch APi according to priority and time they are executed
//----------------------------------------------------------------------------------------
// JavaScript processes code in a synchronous, single-threaded manner, executing one line at a time.
// Asynchronous Execution
// Asynchronous execution allows JavaScript to handle tasks in a non-blocking manner, enabling other code to run while waiting for an earlier task to complete.
// ******************************************************************************
// setTimeout and setInterval
// setTimeout executes a function once after a specified delay, while setInterval continuously executes a function with delays between each call.
//-----------------------------------------------------------------------------------
// These functions symbolize basic asynchronous operations, allowing JavaScript to schedule tasks to be executed in the future, demonstrating practical applications such as delayed actions on web pages.
// Event Loop, Call Stack, and Message Queue
// The lecture detailed the interaction between the JavaScript call stack, the event loop, and the message queue.
// The call stack is responsible for keeping track of function calls and execution context.
// The event loop checks the call stack and, if empty, moves items from the message queue for execution.
// The message queue holds tasks scheduled by asynchronous operations until they are ready to be executed by the event loop.
//-----------------------------------------------------------------------------
// Conclusion
// The session concluded with an emphasis on the importance of understanding both synchronous and asynchronous execution in JavaScript to write efficient, non-blocking code. The use of browser APIs, exemplified by setTimeout and setInterval, alongside the event loop mechanism, enables seamless execution of complex applications. Future discussions will delve deeper into these topics, enhancing understanding and application in real-world scenarios.