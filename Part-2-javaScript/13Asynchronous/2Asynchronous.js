// ============================================================================
// Synchronous, Asynchronous, Callbacks, Promises, Event Loop, Async/Await, Scope
// ============================================================================

// 1) SYNCHRONOUS CODE - Code runs line by line in order. Next line waits until previous one finishes.
// ============================================================================
// console.log("[SYNC] Start");
// function syncTask() {
//   console.log("[SYNC] Task is running...");
// }
// syncTask();
// console.log("[SYNC] End");
// ============================================================================
// 2) ASYNCHRONOUS CODE - (setTimeout + Promise microtasks) Code does NOT wait; tasks run later using event loop. setTimeout → Macrotask queue Promise.then → Microtask queue (runs before macrotasks)
// ============================================================================
// console.log("A");
// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 2000);
// Promise.resolve().then(() => console.log("D"));
// console.log("E");
// ============================================================================
// 3) CALLBACK FUNCTIONS
// - A function passed as an argument to another function.
// - Used to run code AFTER some task finishes.
// ============================================================================
// function greet(name, callback) {
//   console.log("Hello " + name);
//   if (typeof callback === "function") callback();
//   // callback();
// }

// function work() {
//   console.log("Work!");
// }
// greet("Sarthi", work);
// ============================================================================
// 4) CALLBACK HELL EXAMPLE
// - Deeply nested callbacks → hard to read & maintain.
// - This leads to "Pyramid of Doom" structure.
// ============================================================================
// function task1(cb) {
//   setTimeout(() => { console.log("Task 1 done"); cb(10); }, 300);
// }
// function task2(input, cb) {
//   setTimeout(() => { console.log("Task 2 done"); cb(input * 2); }, 300);
// }
// function task3(input, cb) {
//   setTimeout(() => { console.log("Task 3 done"); cb(input + 5); }, 300);
// }

// // calling function
// task1(res1 => {
//   task2(res1, res2 => {  // task2(10, function(res2) { ... })
//     task3(res2, res3 => {  // task3(20, function(res3) { ... })
//       console.log("Final output (callback hell):", res3);
//     });
//   });
// });

// ============================================================================
// 5) PROMISE BASICS: PRODUCING & CONSUMING PROMISES
// - Promise represents a future value.
// - States: pending → fulfilled → rejected.
// - .then() handles success, .catch() handles failure.
// ============================================================================
// function getReleaseDate() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { date: "31 October", location: "Bangalore" };
//       if (data) resolve(data);
//       else reject(new Error("Release date unavailable"));
//     }, 1000);
//   });
// }

// getReleaseDate()
//   .then((data) => console.log("Release Info:", data))
//   .catch((err) => console.error("Error:", err.message));

// ============================================================================
// 6) ASYNC / AWAIT
// - Cleaner syntax for Promises.
// - await pauses inside async function until promise resolves.
// ==========================================================================
// const fetchUser = (id) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, name: "Parth", age: 25 });
//     }, 100);
//   });
// };

// const showUserData = async () => {
//   const user = await fetchUser(101);
//   console.log(user);
//   console.log("Fetching posts for:", user.name);
// };
// showUserData();
// ============================================================================
// 9) EVENT LOOP DEMO — MICROTASKS vs MACROTASKS
// - Microtasks (Promise.then) ALWAYS run before MACROTASKS (setTimeout).
// - Event loop decides execution order.
// ============================================================================
// console.log("[LOOP] Start");
// setTimeout(() => console.log("2nd-SetTimeout-(MACROTASKS)"), 100);
// Promise.resolve().then(() => console.log("1st-Promise.then (Microtask)"));
// console.log("[LOOP] End");
// ============================================================================
// 10) TIMERS: setTimeout vs setInterval
// - setTimeout → runs only one time.
// - setInterval → repeats until stopped.
// ============================================================================
// setTimeout(() => console.log("Runs only one time"), 1000);
// const intervalId = setInterval(() => console.log("Interval every 3 sec"), 3000);
// setTimeout(() => clearInterval(intervalId), 3500); // This stops the interval that was started by setInterval(...).
// ============================================================================