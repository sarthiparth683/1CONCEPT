// Callbacks
// expand_less
// A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Example
function greeting(name) {
  alert('Hello ' + name);
};
function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
};
// processUserInput(greeting);  //1st-alert, then 2nd-prompt
//----------------------------------------------------------------------------------
// Promises
// expand_less
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation, and its resulting value. They offer a more powerful and flexible way to handle asynchronous code compared to callbacks.
// Example  
const myPromise = new Promise((resolve, reject) => {
  const condition = false; // check with true also
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
//----------------------------------------------------------------------------
// Async/Await
// expand_less
// Async/Await is syntactic sugar on top of Promises, making asynchronous code look and behave a little more like synchronous code, which helps in managing asynchronous operations more easily.
// Example
async function fetchData1() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:9984', error);
  }
};
// fetchData1();
//--------------------------------------------------------------------------------
// Fetching Data from APIs
// To fetch data from a web API, the fetch function is used. It makes a network request to the URL provided and returns a promise that resolves into the response of that request. This is an essential part of modern web development for interacting with external services and APIs.
// Example
fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => console.log("data-52", data))
  .catch(error => console.error('Error:984', error));
//--------------------------------------------------------------------------------------
// Error Handling in Asynchronous JavaScript
// Error handling in asynchronous JavaScript, especially when using Promises and Async/Await, is done using try-catch blocks to catch errors that may occur during the execution of asynchronous code.
// Example
async function fetchData2() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
// fetchData2();
//----------------------------------------------------------------------------------
// DOM Manipulation and Local Storage
// DOM manipulation is the process of dynamically changing the document's structure, style, and content. Local Storage provides a way to store data on the client-side browser without expiration time, making it a useful tool for saving state or preferences across sessions.
// Example:-
// Setting an item to Local Storage
document.querySelector('#save')
  .addEventListener('click', () => {
    const value = document.querySelector('#input').value;
    localStorage.setItem('myKey', value);
  });
// Getting the item from Local Storage and displaying it
document.addEventListener('DOMContentLoaded', () => {
  const value = localStorage.getItem('myKey');
  document.querySelector('#display').innerText = value || 'Default';
});
//---------------------------------------------------------------------------------------