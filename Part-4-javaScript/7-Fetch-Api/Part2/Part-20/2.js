// Async/Await and Try-Catch Block

// expand_less
// Async/Await simplifies working with asynchronous operations in JavaScript, making the code easier to read and understand. The try-catch block is used to handle exceptions and errors that may occur during these operations, ensuring the program can continue running or fail gracefully.

// Example

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
//-------------------------------------------------------------------
// APIs, Base URL, Query Parameters

// expand_less
// APIs (Application Programming Interfaces) allow different software applications to communicate with each other. A Base URL is the main address for the API, while Query Parameters are additional options that can be appended to the Base URL to modify the request or filter data.

// Example

const baseURL = 'https://api.example.com';
const queryParams = '?type=public&sort=updated';
fetch(`${baseURL}/repositories${queryParams}`)
  .then(response => response.json())
  .then(data => console.log(data));
//-------------------------------------------------------------------
// Sorting and Filtering Data

// expand_less
// Sorting and filtering data are common operations used to organize or find specific data within a dataset. Sorting changes the order of the dataset based on a specific attribute, while filtering removes non-matching items based on criteria.

// Example

// Sorting array of objects by name
const users = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 24 }];
users.sort((a, b) => a.name.localeCompare(b.name));

// Filtering array to find users above 25
const filteredUsers = users.filter(user => user.age > 25);
//-------------------------------------------------------------------
// Pagination

// expand_less
// Pagination is a technique used to divide large sets of data into smaller, more manageable chunks, typically displayed as pages. This improves user experience by not overwhelming them with too much information at once.

// Example

// Assuming `fetchData` fetches data with pagination
async function fetchPage(pageNumber) {
  const response = await fetchData('?page=' + pageNumber + '&limit=10');
  const data = await response.json();
  console.log('Page', pageNumber, 'Data:', data);
}
fetchPage(1); // Fetches first page of data
//-------------------------------------------------------------------
// JSON Server for Mock Backend

// expand_less
// JSON Server provides a quick back-end for prototyping and mock-up purposes, simulating a real API server. It uses a simple JSON file to create custom API endpoints.

// Example

// # First install JSON Server globally
// npm install -g json-server

// # Create a db.json file with your data
// {
//   "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }]
// }

// # Start JSON Server
// json-server --watch db.json
//-------------------------------------------------------------------
// Deploying JSON Server

// expand_less
// Deploying a JSON Server involves setting up a mock server on a platform like Heroku or Netlify, allowing it to be accessible over the internet. This is useful for sharing prototypes or working in environments where a backend isn't available.

// Example

// To deploy on Netlify:
// 1. Push your JSON Server and db.json to a Git repository.
// 2. Connect your repository to Netlify.
// 3. Configure build settings and deploy.
//-------------------------------------------------------------------
