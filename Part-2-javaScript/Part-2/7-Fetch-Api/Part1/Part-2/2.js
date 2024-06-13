
//-----------------------------------------------------------------------------
// Asynchronous JavaScript - Async/Await
// async and await are extensions of promises that make asynchronous code easier to write and read. They are used to handle operations that need to wait for a promise to resolve before proceeding.
// Example:
async function fetchData() {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();
  console.log("Data-9",data);
};
fetchData();
//-----------------------------------------------------------------------------
// Error Handling in Promises
// Error handling in promises is done using .catch() for rejected promises. This is crucial in dealing with operations that might fail.
// Example:
fetch('url')
  .then(response => response.json())
  .catch(error => console.error('Error:', error));

//-----------------------------------------------------------------------------
//   Making API Requests with Fetch
// We discussed the general structure of making requests to APIs using fetch. This includes grabbing data from backend databases using APIs and how the returned promise is handled.
// The structure involves making a request, handling the response, and dealing with failed requests.
// Search Functionality Implementation
// Implemented a search feature that queries data from an API using specific parameters. Demonstrated how to construct and use fetch calls to retrieve data based on user input or predefined criteria.
// Sorting and Filtering Data
// Even though we encountered some issues with actually implementing sorting and filtering in the lecture, the concept involves modifying the API request based on selected criteria (such as sorting by price or filtering by category) to retrieve the relevant data.
// Understanding HTTP Methods
// Discussed the different HTTP methods (GET, POST, PUT, PATCH, DELETE) and their roles in interacting with servers and databases. These methods enable tasks such as creating, reading, updating, and deleting data (CRUD operations).
// Assignments and Participation
// Emphasized the importance of actively participating in assignments to reinforce learning and clarified the expectations around assignment submission.
//------------------------------------------------------------------------------------------
