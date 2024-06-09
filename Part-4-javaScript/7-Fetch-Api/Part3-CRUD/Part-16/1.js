// HTTP Methods in JavaScript (GET, POST, PUT, PATCH, DELETE):
// Introduction
// HTTP methods play a crucial role in web development, determining how data is requested and manipulated between a client and a server. In JavaScript, understanding the various HTTP methods (GET, POST, PUT, PATCH, DELETE) is essential for building dynamic and interactive web applications.
// Detailed Explanation
// What is the concept? - HTTP methods define the actions that can be performed on resources. Each method has a specific purpose, like retrieving data (GET), creating new data (POST), updating data (PUT/PATCH), or deleting data (DELETE).
// Why are they useful? - HTTP methods provide a standardized way for clients and servers to interact, enabling dynamic content and data manipulation in web applications.
// Use cases of HTTP Methods? 
// GET
// GET is like asking the server to give us something. Its like asking for a piece of toy from the toy shelf. This method requests a specific resource from a server, such as a webpage or an image. It's the most commonly used method and is used to retrieve data from the server.
// GET Method
// Introduction: Retrieves data from a specified resource.
// Use-Cases: Fetching information, loading pages, or querying data.

fetch('https://api.example.com/data', {
  method: 'GET',
})
  .then(response => response.json())
  .then(data => console.log(data));


//----------------------------------------------------------------
// POST is like giving something to the server. It’s like giving a new toy to the toy shelf. This method submits data to a server to create a new resource, such as a new user account or a blog post. It's also commonly used for forms, where users enter data and submit it to a server for processing.
// POST Method
// Introduction: Submits data to be processed to a specified resource.
// Use-Cases: Creating new records, submitting forms.

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John', age: 25 }),
})
  .then(response => response.json())
  .then(data => console.log(data));


//----------------------------------------------------------------
// PUT is like giving something to server to replace an existing item completely. Its like replacing the number-blocks in the toy shelf with a new one. This method is used to update an existing resource on a server. For example, a user may use this method to change entire profile information.
// PUT Method
// Introduction: Updates a specified resource with new data.
// Use-Cases: Modifying existing records.

fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Updated John', age: 26 }),
})
  .then(response => response.json())
  .then(data => console.log(data));


//----------------------------------------------------------------
// PATCH is like telling server to change only a part of something. Its like changing just a number in the number-block. This method is similar to the PUT method, but it's used to update only part of a resource. For example, a user may use this method to change only their email address or their profile picture, without changing the rest of their profile.
// PATCH Method
// Introduction: Partially updates a specified resource with new data.
// Use-Cases: Making specific changes to existing records.

fetch('https://api.example.com/data/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ age: 27 }),
})
  .then(response => response.json())
  .then(data => console.log(data));


//----------------------------------------------------------------
// DELETE is like telling server to get rid of something. Its like throwing away number-block from the toy shelf. This method is used to delete a resource from a server, such as a file or a record in a database.
// DELETE Method
// Introduction: Deletes a specified resource.
// Use-Cases: Removing records or data.

fetch('https://api.example.com/data/1', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(data => console.log(data));


//----------------------------------------------------------------
// Create a CRUD application using JSON-server
// db.json

// {
//   "todos": [
//     {
//       "id": 1,
//       "title": "Learn Javascript",
//       "completed": false
//     }
//   ]
// }
