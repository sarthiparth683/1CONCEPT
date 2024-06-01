//---------------------------------------------------------------
// Frontend and Backend Interaction
// expand_less
// Understanding Frontend and Backend Interaction is crucial for web development. The frontend is what users interact with, while the backend handles the logic and database interactions. An example scenario is a user logging in to a website. The frontend collects the username and password and sends it to the backend, where it's checked against stored credentials.
// Example
// Frontend sends a request to the backend
fetch('/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({username: 'user', password: 'pass'})
}).then(response => response.json()).then(data => console.log(data));
//---------------------------------------------------------------
// Database Operations

// expand_less
// In web applications, Database Operations like Create, Read, Update, Delete (CRUD) are performed in the backend. For example, when a user logs in, the backend checks if the email exists in the database, verifies the password, and responds appropriately.

// Example

// -- SQL Query to check user credentials
// SELECT * FROM users WHERE email = 'user@example.com' AND password = 'encryptedPassword';
//---------------------------------------------------------------
// APIs (Application Programming Interfaces)

// expand_less
// APIs are the connecting points between the frontend and backend. They allow the frontend to communicate with the backend by sending requests and receiving responses. APIs can be used to fetch data, submit forms, and perform other interactions with the server.

// Example

// Use fetch API to get data from the backend
fetch('/api/data').then(response => response.json()).then(data => console.log(data));
//---------------------------------------------------------------
// Fetching Data Using fetch API

// expand_less
// The fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It allows you to asynchronously request for resources.

// Example

// Fetching data from an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
//---------------------------------------------------------------
// Promise and Async/Await

// expand_less
// JavaScript uses Promises for asynchronous operations. Async/Await syntax is syntactic sugar built on top of Promises. It makes asynchronous code look and behave a little more like synchronous code.

// Example

// Async/Await example
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

fetchData();
//---------------------------------------------------------------
// Working With JSON

// expand_less
// JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write and for machines to parse and generate. JSON is often used for sending data from a server to a web page.

// Example

{
  "name": "John Doe",
  "age": 30,
  "isSubscriber": true
}
//---------------------------------------------------------------
// Error Handling in Asynchronous Code

// expand_less
// Error handling in asynchronous operations can be done using .catch() with Promises or try/catch blocks with Async/Await.

// Example with Promises

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
Example with Async/Await

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
// Creating and Appending DOM Elements

// expand_less
// Creating and appending DOM elements dynamically is a common task in JavaScript. It allows you to modify the HTML structure on the fly.

// Example

// Creating a new div element and appending it to the body
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello, world!';
document.body.appendChild(newDiv);
//---------------------------------------------------------------
// Local Storage

// expand_less
// Local Storage provides a way to store data locally within the user's browser. The data persists even after the browser is closed.

// Example

// Storing data in local storage
localStorage.setItem('key', 'value');

// Retrieving data from local storage
const value = localStorage.getItem('key');
console.log(value);
//---------------------------------------------------------------
// Handling User Input

// expand_less
// Handling user input is essential for interactive web applications. Input can be taken from various form elements like text fields, buttons, etc., and can be used to interact with the API or modify the DOM.

// Example

<input type="text" id="inputField" />
<button id="submitButton">Submit</button>

<script>
document.getElementById('submitButton').onclick = function() {
  const inputValue = document.getElementById('inputField').value;
  console.log('User Input:', inputValue);
};
</script>
//---------------------------------------------------------------
//---------------------------------------------------------------