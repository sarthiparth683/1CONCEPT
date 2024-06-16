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
  body: JSON.stringify({ username: 'user', password: 'pass' })
}).then(response => response.json()).then(data => console.log(data));
//---------------------------------------------------------------------------------------
// Database Operations
// expand_less
// In web applications, Database Operations like Create, Read, Update, Delete (CRUD) are performed in the backend. For example, when a user logs in, the backend checks if the email exists in the database, verifies the password, and responds appropriately.
// Example
// -- SQL Query to check user credentials
// SELECT * FROM users WHERE email = 'user@example.com' AND password = 'encryptedPassword';
//-----------------------------------------------------------------------------------------
// APIs (Application Programming Interfaces)
// APIs are the connecting points between the frontend and backend. They allow the frontend to communicate with the backend by sending requests and receiving responses. APIs can be used to fetch data, submit forms, and perform other interactions with the server.
// Use fetch API to get data from the backend
fetch("https://fakestoreapi.com/users")
  .then(response => response.json())
  .then(data => console.log("DATA-24", data));
//------------------------------------------------------------------------------------
// Fetching Data Using fetch API
fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => console.log("DATA-29", data));
//-------------------------------------------------------------------------------------
// Promise and Async/Await
// JavaScript uses Promises for asynchronous operations. Async/Await syntax is syntactic sugar built on top of Promises. It makes asynchronous code look and behave a little more like synchronous code.
// Async/Await example
async function fetchData1() {
  try {
    const response = await fetch('https://fakestoreapi.com/users');
    const data = await response.json();
    console.log("DATA-41", data);
  } catch (error) {
    console.log("error-11", error)
  }
}
fetchData1();
//--------------------------------------------------------------------------------
async function fetchData2() {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();
  console.log("DATA-51", data);
};
fetchData2();
//-----------------------------------------------------------------------------------------
// Error Handling in Asynchronous Code
// Error handling in asynchronous operations can be done using .catch() with Promises or try/catch blocks with Async/Await.
// Example with Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
// Example with Async/Await
async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/users');
    const data = await response.json();
    console.log("DATA-71", data);
  } catch (error) {
    console.error('Error:71', error);
  }
};
fetchData();
//-----------------------------------------------------------------------------------
// Creating and Appending DOM Elements
// Creating and appending DOM elements dynamically is a common task in JavaScript. It allows you to modify the HTML structure on the fly.
// Creating a new div element and appending it to the body
const newDiv = document.createElement('div');
newDiv.innerHTML = '<p>sarthi</p> ';
// newDiv.innerText = "Hello!";  // try this also
document.body.append(newDiv);
//------------------------------------------------------------------------------------
// Local Storage
// Local Storage provides a way to store data locally within the user's browser. The data persists even after the browser is closed.
// Storing data in local storage
localStorage.setItem('key', 'value');
// Retrieving data from local storage
const value = localStorage.getItem('key');
console.log(value);
//--------------------------------------------------------------------------------------
// Handling User Input
// Handling user input is essential for interactive web applications. Input can be taken from various form elements like text fields, buttons, etc., and can be used to interact with the API or modify the DOM.
{/* <input type="text" id="inputField" />
<button id="submitButton">Submit</button> */}


{/* document.getElementById('submitButton').onclick = function() {
  const inputValue = document.getElementById('inputField').value;
  console.log('User Input:', inputValue);
}; */}

//-------------------------------------------------------------------------------------

