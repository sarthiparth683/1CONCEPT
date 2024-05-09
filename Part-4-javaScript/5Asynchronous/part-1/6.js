// Executing Asynchronous Code with Promises

// expand_less
// Promises provide a cleaner, more flexible way to handle asynchronous operations compared to callbacks. They represent an operation that hasn't completed yet but is expected in the future.

// Example

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done'), 1000);
});

promise.then(
  result => console.log(result),
  error => console.log(error)
);
// After 1 second, logs 'done'