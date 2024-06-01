//---------------------------------------------------------------
// Lecture Summary

// Introduction to Mock Server and JWT Authentication
// The lecture explored various aspects of web development, focusing on CRUD operations, JSON server for creating APIs, HTTP methods, and particularly JWT (JSON Web Tokens) for authentication. It provided insights on how to create a mock server using JSON server, utilize different HTTP methods for managing data, and implement JWT for securing API endpoints.

// CRUD Operations and JSON Server
// CRUD stands for Create, Read, Update, Delete, which are the four basic operations for managing data on a server.
// Create: Implemented using the post HTTP method to add new data.
// Read: Utilizes the get method to fetch data.
// Update: Can be done using put or patch, where put replaces an entire object and patch updates parts of the object.
// Delete: Employed to remove data using the delete method.
// The JSON server provides a quick setup for a mock server, allowing the simulation of a backend server by creating a db.json file to serve CRUD operations.

// HTTP Methods
// HTTP methods, or verbs, are used to perform actions on resources.
// Get: Fetches data from the server.
// Post: Creates new data on the server.
// Put: Replaces existing data on the server.
// Patch: Partially updates data on the server.
// Delete: Removes data from the server.
// These methods facilitate interaction with the backend server, allowing for data manipulation through API calls.

// JWT for Authentication
// JWTs are used for secure communication between the client and the server.
// Provides a secure way to authenticate users and authorize access to certain resources based on tokens.
// Tokens are generated upon successful login and must be included in the HTTP headers for subsequent requests requiring authentication.
// JWT authentication ensures that only authorized users can access certain functionalities, enhancing the security of web applications.

// Summary
// The lecture provided a comprehensive overview of how to use JSON server for creating mock APIs, perform CRUD operations, utilize HTTP methods for data management, and implement JWT authentication for securing API endpoints. Understanding these concepts is crucial for developing secure and functional web applications.
//---------------------------------------------------------------
// Fetching Data with Async/Await and Try-Catch

// expand_less
// Fetching data in JavaScript can be done using the Fetch API along with async and await for asynchronous code management. The try-catch statement is used to handle errors that may occur during the fetching process. This approach makes the code cleaner and easier to read. Example

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
//---------------------------------------------------------------
// CRUD Operations

// expand_less
// CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that can be performed on any data storage. In web development, CRUD operations are often implemented with APIs to manage data on a server.

// Create operation adds new data.
// Read operation retrieves data.
// Update operation modifies existing data.
// Delete operation removes data. Example
// Given a JSON server endpoint '/products'
// CREATE (POST)
fetch('/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: 'New Product', price: 100}),
  })
  
  // READ (GET)
  fetch('/products')
  
  // UPDATE (PUT or PATCH)
  fetch('/products/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({price: 150}),
  })
  
  // DELETE
  fetch('/products/1', { method: 'DELETE' })
  
//---------------------------------------------------------------
// JWT Authentication

// expand_less
// JWT (JSON Web Tokens) is a compact, URL-safe means of representing claims to be transferred between two parties. In web development, JWTs are used for authentication; when a user logs in, the server generates a token that certifies the user's identity. The client sends this token back with each request to access protected routes or resources. Example
// After successful login, assuming the server response includes a JWT
cost token = response.token;

// Include the JWT in the Authorization header with each request
fetch('/api/protected', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

//---------------------------------------------------------------
