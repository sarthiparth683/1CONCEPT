// Async-Await :
// Introduction
// async/await is a modern approach to handling asynchronous operations in JavaScript, providing a more readable and synchronous-like syntax.

// Detailed Explanation
// async/await is a modern way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.

// Quick Recap : What’s an async operation ?

// In JavaScript, certain operations (like fetching data from a server) don't complete immediately. Instead of blocking the rest of the code from running, JavaScript continues executing the next lines of code. This is where async/await comes into play, helping us manage these operations more intuitively.

// Code Implementation | Examples
// Live Coding Session: Understanding Async Functions
// We'll write async functions, use the await keyword, and handle asynchronous operations without callback hell.

// Fetch operation using .then and .catch
//-------------------------------------------------------------
function fetchUserData(url) {
  fetch(url) // We start by calling the fetch function, which returns a Promise.
      .then(response => { // We use .then() to handle the successful response.
          return response.json(); // If the response was successful, we return the parsed JSON data using response.json(), which itself returns a Promise.
      })
      .then(data => { // We chain another .then() to handle the parsed JSON data.
          console.log(data);
      })
      .catch(error => { // Finally, we use .catch() to handle any errors that might occur during the fetch or the parsing process.
          console.error("Error fetching data:", error);
      });
}

fetchUserData('https://api.example.com/users'); // 

//-------------------------------------------------------------
// Fetch operation using async and await
async function fetchUserData(url) {
  try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

fetchUserData('https://api.example.com/users');

//-------------------------------------------------------------
// Summary :

// async/await provides a cleaner way to handle asynchronous operations in JavaScript.
// It works hand-in-hand with Promises, making the code look synchronous while still being asynchronous.
// The fetch API, combined with async/await, offers a straightforward way to handle network requests.
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
