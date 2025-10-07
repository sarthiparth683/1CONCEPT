// The Event Loop in JavaScript is a mechanism that handles asynchronous operations — it allows JavaScript (which is single-threaded) to perform non-blocking tasks like handling user input, network requests, or timers.JavaScript executes one task at a time (single-threaded).However, browsers or Node.js provide Web APIs (like `setTimeout`, `fetch`, etc.) that can run tasks asynchronously in the background.The Event Loop manages how and when these background tasks are added back to the main execution queue.

// ###  How It Works (Step-by-Step):

// 1. Call Stack - Where JS code runs — it executes one function at a time.

// 2. Web APIs / Node APIs - When asynchronous functions like `setTimeout()` or `fetch()` are called, they are handled by browser APIs.

// 3. Callback Queue (Task Queue / Message Queue) - Once those async tasks finish, their callbacks are placed in a queue.

// 4. Event Loop - Constantly checks: - “Is the call stack empty?”
//       If yes, it moves the first callback from the queue into the call stack for execution.
//       If no, it waits.
// -------------------------------------------------------------------------------------------------------------------------

// ### Example:

// console.log("Start");

// setTimeout(() => {
//   console.log("Async task done");
// }, 1000);

// console.log("End");

// ### Output:

// Start
// End
// Async task done

// Explanation:

//  “Start” → runs immediately.
//  `setTimeout()` → sent to Web API → after 1 second, callback goes to queue.
//  “End” → runs next.

//  Event loop sees the stack empty → pushes callback → “Async task done” prints.

// In short:-The Event Loop continuously checks if the call stack is empty and if so, pushes pending asynchronous callbacks (from the queue) into it for execution.
//-------------------------------------------------------------------------------------------------------------------------------------