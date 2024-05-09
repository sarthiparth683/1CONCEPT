// SetTimeout and SetInterval

// expand_less
// setTimeout allows you to execute a function once after a specified period. setInterval repeatedly executes a function at every given time-interval until it is stopped.

// SetTimeout Example

setTimeout(() => {
  console.log('This message is shown after 3 seconds.');
}, 3000);


// SetInterval Example

setInterval(() => {
  console.log('This message appears every 2 seconds.');
}, 2000);