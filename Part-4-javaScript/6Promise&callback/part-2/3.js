// Promises are native to JavaScript and are used for handling asynchronous operations. They allow you to write code that assumes a value will be available in the future, without stopping everything to wait for that value to arrive. A promise has three states: pending, fulfilled, and rejected. When a promise is fulfilled, the .then() method runs. When a promise is rejected, the .catch() method runs.
let p = new Promise((resolve, reject) => {
    // asynchronous operation code
    if (/* operation successful */) {
      resolve('Success');
    } else {
      reject('Failure');
    }
  });
  
  p.then((message) => {
    console.log(message);
  }).catch((message) => {
    console.log(message);
  });
  //-----------------------------------------------------------------
//   Asynchronous operations in JavaScript allow the code to continue running while waiting for a process, like fetching data from a server, to complete. Callback functions are functions passed as arguments to other functions to be executed later, providing a way to handle the result of an asynchronous operation.

// Example
function getData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  getData('https://api.example.com', (error, data) => {
    if (error) {
      console.error('Failed to fetch data:', error);
    } else {
      console.log('Data fetched successfully:', data);
    }
  });
  //--------------------------------------------------------------

//   Within the context of Promises, resolve and reject are methods used to determine the outcome of a promise. resolve is called when the asynchronous operation completes successfully, and reject is called when the operation fails.
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
      resolve('Success');
    } else {
      reject('Failed');
    }
  });
  
  p.then((message) => {
    console.log(message); // Success
  }).catch((message) => {
    console.log(message); // Failed, if the condition is not met
  });
//------------------------------------------------------------------
// Promises provide a cleaner, more manageable way to handle the outcomes of asynchronous operations compared to traditional callback functions, by allowing for simpler and more readable code structures, especially when handling multiple asynchronous tasks.

// Example
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data loaded successfully');
      }, 2000);
    });
  }
  
  fetchData().then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  });
//--------------------------------------------------------------------  
// Promise chaining is a method of executing a sequence of asynchronous tasks one after another using Promises. Each .then() returns a new Promise, allowing the next .then() or .catch() in the chain to handle its resolution or rejection respectively.

// Example
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // first task
  })
  .then((result) => {
    console.log(result); // logs 1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // logs 2
    return result * 3;
  })
  .then((result) => {
    console.log(result); // logs 6
    return result * 4;
  });
//-------------------------------------------------------------------------
// Error handling in Promises is achieved using the .catch() method, which catches any error that occurs during the execution of the promise chain.

// Example
new Promise((resolve, reject) => {
    throw new Error('Something failed');
  })
  .catch((error) => {
    console.error(error.message); // handles any error thrown in the promise
  });
//-----------------------------------------------------------------------
// JavaScript allows for the creation of dynamic elements that can be added to the DOM programmatically. This is particularly useful for updating UI elements based on asynchronous operations like data fetching.

// Example
// Creating a new image element and appending it to a container element
let container = document.getElementById('container');
let img = document.createElement('img');
img.src = 'path/to/image.jpg';
container.appendChild(img);
//-------------------------------------------------------------------
// Loading indicators are used to inform users that data is currently being loaded, enhancing user experience in asynchronous operations. They are usually implemented by showing an animation or message during data fetching and removed once the data is available.

// Example
// Show loading indicator
let loader = document.getElementById('loader');
loader.style.display = 'block';

// Simulate data fetching
setTimeout(() => {
  // Data fetching completed
  loader.style.display = 'none';
  console.log('Data loaded');
}, 2000);
//-------------------------------------------------------------------------
// Handling Failed Asynchronous Operations

// expand_less
// When an asynchronous operation fails, it's important to handle the failure gracefully, such as by alerting the user or retrying the operation. Promises make this easier with the .catch() method.

// Example
fetch('https://api.example.com/data')
  .then(response => response.json())
  .catch(error => console.error('Failed to fetch data:', error));
//--------------------------------------------------------------------
// JavaScript supports functional programming principles, allowing for the use of first-class functions (functions that can be passed as arguments, returned from other functions, or assigned to variables) and higher-order functions (functions that take other functions as arguments or return them).

// Example
// Higher-order function that takes a callback
function processData(callback) {
    const data = fetchData(); // assume fetchData returns data
    callback(data);
  }
  
  function displayData(data) {
    console.log('Displaying data:', data);
  }
  
  // Passing displayData function as a callback to processData
  processData(displayData);
//-----------------------------------------------------------  