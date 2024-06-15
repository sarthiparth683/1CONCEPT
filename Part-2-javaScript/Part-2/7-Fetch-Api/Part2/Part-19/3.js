// Lecture Summary

// Overview of the Lecture
// The lecture focused on understanding various operations associated with the Fetch API and how it enables CRUD operations (Create, Read, Update, Delete) in web development. The instructor also covered how to use Async/Await with promises for asynchronous operations in JavaScript, alongside practical examples with the Fetch API to connect front-end with back-end, and how to handle data fetched from APIs. Additionally, the lecture included an explanation of handling promises and async functions for processing data from APIs and manipulating DOM based on fetched data.

// Key Topics Discussed
// CRUD Operations with Fetch API

// The Fetch API supports CRUD operations, allowing the creation, reading, updating, and deleting of data through API requests. The instructor emphasized the importance of understanding these operations for dynamic web application development.
// Connecting Front-End with Back-End

// Fetch API acts as a bridge between the front-end and the back-end. Examples included signing up for an account, viewing dashboard content, updating profiles, and deleting assignments, showcasing how Fetch API facilitates these interactions.
// Async/Await and Promises

// In-depth discussion on handling asynchronous operations using async/await syntax and promises in JavaScript. Proper usage of these constructs enables efficient data fetching and manipulation without blocking the main thread.
// Practical Fetch API Usage

// Demonstrations included using Fetch API to perform get and post requests, handling responses, and dynamically updating the DOM based on the data fetched from an API. The lecture covered how to list users, display user data, and interact with APIs for authentic login functionalities.
// Dynamic DOM Manipulation

// Techniques for dynamically updating the DOM with fetched data were illustrated, including creating elements, appending data to the DOM, and implementing loaders for asynchronous operations.
// Handling Asynchronous Data Fetching

// The lecture explained handling multiple asynchronous fetch requests and computing results based on fetched data. Strategies for using async/await with fetch to wait for data before proceeding with further operations were discussed.
// Practical Examples and Demonstrations
// Detailed examples of using Fetch API for CRUD operations.
// Dynamic creation and manipulation of DOM elements based on fetched data.
// Using async/await with promises for asynchronous data fetching and handling.
// Implementing loaders to indicate processing of asynchronous operations.
// This lecture comprehensively covered Fetch API's role in web development, emphasizing CRUD operations, async/await, promises, dynamic DOM updates, and handling asynchronous API interactions for building interactive web applications.

//---------------------------------------------------------------
// CRUD Operations

// expand_less
// CRUD stands for Create, Read, Update, Delete. These are the four basic operations you can perform on data. Using the fetch function in web development, you can make these operations against a backend API.

// Create: Add new data.
// Read: Retrieve existing data.
// Update: Modify existing data.
// Delete: Remove existing data.
// Example
// Example of a GET request to read data
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));

// Example of a POST request to create data
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({key: 'value'}),
})
  .then(response => response.json())
  .then(data => console.log(data));

//---------------------------------------------------------------
// Using Fetch for API Requests

// expand_less
// The fetch function is used to make network requests to APIs. It's a powerful tool for connecting the frontend of an application with the backend. Through fetch, you can perform CRUD operations by specifying the method (GET, POST, PUT, DELETE) in the request.

// Example

// GET request for fetching data
fetch('https://api.example.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));

// POST request to create a new post
fetch('https://api.example.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'My New Post',
    body: 'This is the post body.',
    userId: 1
  }),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
//---------------------------------------------------------------
// Promises in JavaScript

// expand_less
// JavaScript promises are a way to handle asynchronous operations. They offer a more powerful and flexible way to work with asynchronous code, compared to callbacks. A promise can be in one of three states: pending, fulfilled, or rejected. With fetch, you work with promises to handle the completion of the request.

// Example

// Making a GET request using fetch and handling the promise
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Using async/await syntax for promises
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
//---------------------------------------------------------------
// Async/Await

// expand_less
// Async/Await is syntactic sugar built on top of promises. It provides a more straightforward way to handle promises by allowing you to write asynchronous code that looks more like synchronous code. With async before a function, you can use await within it to wait for a promise to resolve or reject.

// Example

// Defining an async function to use await for fetching data
async function getUser() {
  const response = await fetch('https://api.example.com/user');
  const data = await response.json();
  console.log(data);
}

getUser()
  .then(() => console.log('Fetched user successfully.'))
  .catch(error => console.error('Error fetching user:', error));
//---------------------------------------------------------------
// Error Handling in Promises

// expand_less
// Error handling is crucial when working with asynchronous operations. In promises, .catch is used to catch any error that occurs during the execution of the promise chain. With async/await, try-catch blocks are used for error handling, making the syntax similar to synchronous error handling.

// Example

// Using .catch with fetch promise
fetch('https://api.example.com/invalid-url')
  .then(response => response.json())
  .catch(error => console.error('Failed to fetch:', error));

// Using try-catch with async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/invalid-url');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();
//--------------------------------------------------------------