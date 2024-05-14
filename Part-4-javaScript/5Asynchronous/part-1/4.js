// Promise and Async/Await
// JavaScript introduced Promises and later async/await for managing asynchronous operations more effectively. Promises represent a value that may be available now, in the future, or never,
// providing methods .then(), .catch(), and .finally() for handling outcomes. Async/await makes asynchronous code look synchronous and easier to read.
//---------------------------------------------------------------------------------
// Example with Promise
new Promise((resolve, reject) => {
    setTimeout(() => resolve('Result'), 2000);
}).then(response => console.log(response));
// Logs 'Result' after 2 seconds
//---------------------------------------------------------------------------------
// Example with Async/Await 
async function fetchData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched'), 3000);
    });
    let result = await promise;
    console.log(result);
}
fetchData();
// Logs 'Data fetched' after 3 seconds  
//---------------------------------------------------------------------------------
// Executing Asynchronous Code with Promises
// Promises provide a cleaner, more flexible way to handle asynchronous operations compared to callbacks. They represent an operation that hasn't completed yet but is expected in the future.
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
  });
  promise.then(
    result => console.log(result),
    error => console.log(error)
  );
  // After 1 second, logs 'done'