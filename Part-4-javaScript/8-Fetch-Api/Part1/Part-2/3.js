 //-----------------------------------------------------------------------------
//  Fetch API

// expand_less
// The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

// Example
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  //-----------------------------------------------------------------------------
//   Promises

// expand_less
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object you attach callbacks to, instead of passing callbacks into a function.

// Example
const promise = new Promise((resolve, reject) => {
    if (successfulCondition) {
      resolve('Success!');
    } else {
      reject('Failure.');
    }
  });
//   Promises make handling asynchronous requests and their responses easier and cleaner, especially with .then() for successful requests and .catch() for handling errors.
  //-----------------------------------------------------------------------------
//   Async/Await

// expand_less
// Async functions make the code look like it's synchronous, but it operates asynchronously. The keyword async before a function makes the function return a promise, and await is used to wait for an asynchronous operation inside the function.

// Example
async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  //-----------------------------------------------------------------------------
//   Handling Fetch Responses

// expand_less
// When using Fetch API, handling the response correctly is essential, especially since it returns a Promise. You need to check if the request was successful and then convert the response to the appropriate format (e.g., JSON).

// Example
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  //-----------------------------------------------------------------------------
//   Error Handling in Fetch

// expand_less
// Handling errors in Fetch API involves checking the response and catching errors if the fetch fails due to network issues.

// Example
fetch('https://api.example.com/data')
  .catch(error => console.error('Fetch Error:', error))
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .catch(error => console.error('Error Handling Response:', error));

  //-----------------------------------------------------------------------------
//   Using API Keys

// expand_less
// When working with APIs, sometimes you need an API key to make requests. This key is a unique identifier used to authenticate a user, developer, or calling program to an API.

// Example
const apiKey = 'YOUR_API_KEY';
fetch(`https://api.example.com/data?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  //-----------------------------------------------------------------------------
//   Query Parameters in Fetch

// expand_less
// Query parameters are a defined set of parameters attached to the end of a URL. They are extensions of the URL that are used to help define specific content or actions based on the data being passed.

// Example
fetch('https://api.example.com/data?search=javascript&limit=10')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------