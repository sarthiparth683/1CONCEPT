// Async/Await and Try-Catch Block
async function fetchData() {
  try {
    const response = await fetch('https://fakestoreapi.com/users');
    const data = await response.json();
    console.log("data-1", data);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};
//----------------------------------------------------------------------------------------
// APIs, Base URL, Query Parameters
// APIs (Application Programming Interfaces) allow different software applications to communicate with each other. A Base URL is the main address for the API, while Query Parameters are additional options that can be appended to the Base URL to modify the request or filter dat
const baseURL = 'https://api.example.com';
const queryParams = '?type=public&sort=updated';
fetch(`${baseURL}/repositories${queryParams}`)
  .then(response => response.json())
  .then(data => console.log("data-2", data));
//---------------------------------------------------------------------------------------------
// Sorting and Filtering Data
// Sorting and filtering data are common operations used to organize or find specific data within a dataset. Sorting changes the order of the dataset based on a specific attribute, while filtering removes non-matching items based on criteria.
// Sorting array of objects by name
const users = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 24 }];
console.log("user-1", users);
users.sort((a, b) => a.name.localeCompare(b.name));
console.log("user-2", users);
// Filtering array to find users above 25
const filteredUsers = users.filter(user => user.age > 25);
console.log("filtered-Users", filteredUsers);
//-------------------------------------------------------------------------------------------
// Pagination
// Pagination is a technique used to divide large sets of data into smaller, more manageable chunks, typically displayed as pages. This improves user experience by not overwhelming them with too much information at once.
async function fetchPage1(pageNumber) {
  const response = await fetchData('?page=' + pageNumber + '&limit=10');
  // const data = await response.json();
  console.log('Page', pageNumber, 'Data:');
};
fetchPage1(1);
//----------------------------------------------------------------------------------------------
// JSON Server for Mock Backend
// JSON Server provides a quick back-end for prototyping and mock-up purposes, simulating a real API server. It uses a simple JSON file to create custom API endpoints.

// # First install JSON Server globally
// npm install -g json-server
// # Create a db.json file with your data
// {
//   "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }]
// }
// # Start JSON Server
// json-server --watch db.json
//---------------------------------------------------------------------------------------
