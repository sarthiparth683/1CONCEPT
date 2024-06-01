// DOM (Document Object Model)

// expand_less
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a hierarchical tree of nodes, each node representing parts of the document, such as elements and text nodes.

// Example

const element = document.getElementById('myElement');
element.innerText = 'Hello World';
//---------------------------------------------------------------
// Local Storage

// expand_less
// Local Storage provides a way to store data on the client's browser. The data stored in Local Storage is saved across browser sessions. Data stored in Local Storage is not sent with every server request, making it different from cookies. It's ideal for storing non-sensitive information that does not need to be transmitted to the server.

// Example

localStorage.setItem('user', 'John Doe');
const user = localStorage.getItem('user');
console.log(user); // Output: John Doe
//---------------------------------------------------------------
// Asynchronous Operations

// expand_less
// Asynchronous operations allow a program to perform tasks in the background without blocking the execution of other tasks. Promises, async/await, setTimeout, setInterval, and fetch API are key in handling asynchronous operations in JavaScript.

// Example

function timeoutExample() {
  setTimeout(function() { console.log('This appears after 2 seconds'); }, 2000);
}

timeoutExample();
//---------------------------------------------------------------
// Promises

// expand_less
// Promises are objects representing the eventual completion (or failure) of an asynchronous operation. A Promise can be in one of these states: pending, fulfilled, or rejected. Promises provide a cleaner, more flexible way to handle asynchronous operations compared to callbacks.

// Example

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Operation succeeded');
  } else {
    reject('Operation failed');
  }
});

myPromise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
//---------------------------------------------------------------
// Fetch API

// expand_less
// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest but provides a more powerful and flexible feature set.

// Example

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
//---------------------------------------------------------------
// Async/Await

// expand_less
// The async/await syntax is a way to work with promises in a more comfortable and readable way. An async function returns a promise, and the await keyword waits for the promise to resolve before continuing the execution of the remainder of the async function.

// Example

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
// Event Listeners

// expand_less
// Event listeners allow you to listen for and react to user events, such as clicks, mouse movements, key presses, and more. They enable interactive web pages that respond to user inputs.

// Example

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button was clicked!');
});
//---------------------------------------------------------------
// Form Data Handling

// expand_less
// Handling form data involves retrieving user input from form elements and using it in your web application. Forms are essential for user interaction, allowing users to submit data.

// Example

// <!-- HTML form -->
<form id='userForm'>
  <input type='text' id='username' />
  <button type='submit'>Submit</button>
</form>
// JavaScript
document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission
  const username = document.getElementById('username').value;
  console.log('Username:', username);
});
//---------------------------------------------------------------
// JavaScript Object Notation (JSON)

// expand_less
// JavaScript Object Notation (JSON) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. JSON is a text format that is completely language independent but uses conventions familiar to programmers of the C-family of languages.

// Example

// {
//   "name": "John",
//   "age": 30
// }
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

