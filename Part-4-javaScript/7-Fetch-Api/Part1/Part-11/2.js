// Callbacks

// expand_less
// A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Example

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
//-------------------------------------------------------------------
// Promises

// expand_less
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation, and its resulting value. They offer a more powerful and flexible way to handle asynchronous code compared to callbacks.

// Example

const myPromise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    resolve('Promise is resolved successfully.');
  } else {
    reject('Promise is rejected');
  }
});

myPromise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
//-------------------------------------------------------------------
// Async/Await

// expand_less
// Async/Await is syntactic sugar on top of Promises, making asynchronous code look and behave a little more like synchronous code, which helps in managing asynchronous operations more easily.

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
//-------------------------------------------------------------------
// Fetching Data from APIs

// expand_less
// To fetch data from a web API, the fetch function is used. It makes a network request to the URL provided and returns a promise that resolves into the response of that request. This is an essential part of modern web development for interacting with external services and APIs.

// Example

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
//-------------------------------------------------------------------
// Error Handling in Asynchronous JavaScript

// expand_less
// Error handling in asynchronous JavaScript, especially when using Promises and Async/Await, is done using try-catch blocks to catch errors that may occur during the execution of asynchronous code.

// Example

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
//-------------------------------------------------------------------
// DOM Manipulation and Local Storage

// expand_less
// DOM manipulation is the process of dynamically changing the document's structure, style, and content. Local Storage provides a way to store data on the client-side browser without expiration time, making it a useful tool for saving state or preferences across sessions.

// Example

// Setting an item to Local Storage
document.querySelector('#save').addEventListener('click', () => {
  const value = document.querySelector('#input').value;
  localStorage.setItem('myKey', value);
});

// Getting the item from Local Storage and displaying it
document.addEventListener('DOMContentLoaded', () => {
  const value = localStorage.getItem('myKey');
  document.querySelector('#display').innerText = value || 'Default';
});
//-------------------------------------------------------------------
// What is fetch()?
// fetch() is a JavaScript function for making network requests.

// Basic Structure:
fetch("<https://api.example.com/user-details>")
// This is the URL you're "calling"
  .then(function (response) {
    return response.json()// Convert the response to a format we can easily work with.
  })
  .then(function (data) { // so the returned value of the previous called is available now here as function argument
    console.log(data) // Do something with the data
  })
  .catch(function (error) {
    console.error("Error:", error) // If something goes wrong, this block will run.
  })
//-------------------------------------------------------------------
// With the basic structure we've discussed, you can start making simple requests and handle the data they return. As you become more familiar with it, you'll discover even more capabilities and options it offers.

// Breaking it Down:
// URL: The URL inside fetch('<https://api.example.com/data>') is the web address we want to get data from or send data to.
// .then() Method: Think of .then() as the next step in a sequence. It's used because network operations can take time, so JavaScript doesn't want to just sit around waiting. Instead, it says, "When you're done getting that data, then do this next thing."
// response => response.json(): When the server gives us back data, it's often not in a format that's easy for JavaScript to work with immediately. So, we convert it into a "JavaScript-friendly" format called JSON.
// data => { ... }: Now that we have our data in a format we can use, we define what to do with it. For simplicity, we're just logging it to the console in this example.
// .catch() Method: Sometimes, things go wrong. Maybe the server is down, or we made a typo in the URL. The .catch() method lets us handle any errors gracefully, meaning our entire script won't crash.
// Notes:
// fetch() returns a "Promise"
// The beauty of fetch() is that it's part of modern JavaScript, so you don't need any additional libraries or tools to use it.
//-------------------------------------------------------------------
// As a frontend developer, your task is to retrieve data from the backend (the storage room) and show it on the frontend (the display). This data is managed by backend developers, and they provide specific instructions on how to access it.

// These instructions are called API documentation. It's like a guidebook written by the backend team to help frontend developers know the right way to ask for data. So different Products. Different API, Different API Documentations. It’s like different machines that you have in your house like washing machine, refrigerator etc having different user manual. You read that particular machine’s user manual ( API Documentation ) to understand about that machine ( API )

// Using the fetch function in JavaScript, you can follow these instructions to request data from the backend. Once you have the data, you can display it in your application. This means your application is now not just a standalone app but is connected to a backend server, pulling real data to show to users.

// So our agenda in this particular session is to

// Explore some API documentations
// Use fetch API and build some application which makes network request to the server and use the response and display the same onto UI.
// We will also see a cool tool called Local Storage and how it can be useful
// Code Implementation | Examples
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//-------------------------------------------------------------------