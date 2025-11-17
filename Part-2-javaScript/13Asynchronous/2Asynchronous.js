// ============================================================================
// Synchronous, Asynchronous, Callbacks, Promises, Event Loop, Async/Await, Scope
// ============================================================================


// ============================================================================
// 1) SYNCHRONOUS CODE
// ============================================================================
console.log("[SYNC] Start");
function syncTask() {
  console.log("[SYNC] Task is running...");
}
syncTask();
console.log("[SYNC] End");


// ============================================================================
// 2) ASYNCHRONOUS CODE (setTimeout + Promise microtasks)
// ============================================================================
console.log("A");
setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => console.log("C"));
}, 0);
Promise.resolve().then(() => console.log("D"));
console.log("E");


// ============================================================================
// 3) CALLBACK FUNCTIONS
// ============================================================================
function greet(name, callback) {
  console.log("Hello " + name);
  if (typeof callback === "function") callback();
}
function work() {
  console.log("Work!");
}
greet("Sarthi", work);


// ============================================================================
// 4) CALLBACK HELL EXAMPLE
// ============================================================================
function task1(cb) {
  setTimeout(() => { console.log("Task 1 done"); cb(10); }, 300);
}
function task2(input, cb) {
  setTimeout(() => { console.log("Task 2 done"); cb(input * 2); }, 300);
}
function task3(input, cb) {
  setTimeout(() => { console.log("Task 3 done"); cb(input + 5); }, 300);
}
// Nested callbacks
// task1(res1 => {
//   task2(res1, res2 => {
//     task3(res2, res3 => {
//       console.log("Final output (callback hell):", res3);
//     });
//   });
// });


// ============================================================================
// 5) PROMISE BASICS: PRODUCING & CONSUMING PROMISES
// ============================================================================
function getReleaseDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { date: "31 October", location: "Bangalore" };
      if (data) resolve(data);
      else reject(new Error("Release date unavailable"));
    }, 1000);
  });
}

getReleaseDate()
  .then(data => console.log("Release Info:", data))
  .catch(err => console.error("Error:", err.message));


// ============================================================================
// 6) PROMISE EXAMPLE: SIMPLE VALIDATION
// ============================================================================
function fatherPromise(marks) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(marks) || marks.length === 0) {
      return reject(new Error("Marks must be a non-empty array"));
    }

    const avg = marks.reduce((a, b) => a + b, 0) / marks.length;

    setTimeout(() => {
      if (avg >= 75) resolve("CONGRATS! I will gift you a bike");
      else reject(new Error("SORRY! Marks are not enough, no bike"));
    }, 1000);
  });
}

fatherPromise([80, 70, 90])
  .then(msg => console.log(msg))
  .catch(err => console.error(err.message));


// ============================================================================
// 7) PROMISE.ALL & PROMISE.RACE
// ============================================================================
const p1 = Promise.resolve(1);
const p2 = new Promise(res => setTimeout(() => res(2), 200));
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(values => console.log("Promise.all →", values));
Promise.race([p1, p2, p3]).then(value => console.log("Promise.race →", value));


// ============================================================================
// 8) ASYNC / AWAIT
// ============================================================================
function findSum(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) return reject(new Error("Array required"));
    const sum = arr.reduce((acc, n) => acc + n, 0);
    resolve(sum);
  });
}

async function output() {
  try {
    const arr = [1, 2, 3, 4, 5];
    const sum = await findSum(arr);
    console.log("Sum (async/await):", sum);
  } catch (err) {
    console.error(err.message);
  }
}
output();


// ============================================================================
// 9) EVENT LOOP DEMO — MICROTASKS vs MACROTASKS
// ============================================================================
console.log("[LOOP] Start");
setTimeout(() => console.log("[LOOP] Timeout (macrotask)"), 0);
Promise.resolve().then(() => console.log("[LOOP] Promise.then (microtask)"));
console.log("[LOOP] End");


// ============================================================================
// 10) TIMERS: setTimeout vs setInterval
// ============================================================================
setTimeout(() => console.log("Timeout after 1 sec"), 1000);
const intervalId = setInterval(() => console.log("Interval every 1 sec"), 1000);
setTimeout(() => clearInterval(intervalId), 3500); // stop interval after 3.5 sec


// ============================================================================
// 11) SCOPE: var vs let vs const
// ============================================================================
function scopeTest() {
  var outerVar = "outer var";
  let outerLet = "outer let";

  if (true) {
    var innerVar = "inner var"; // function-scoped
    let innerLet = "inner let"; // block-scoped
    console.log("Inside block →", innerLet);
  }

  console.log(innerVar); // OK
  // console.log(innerLet); // ERROR: block-scoped
}
scopeTest();
