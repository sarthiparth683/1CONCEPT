//---------------------------------------------------------------
// Interview based question:
// Explain how JSON Server can be used to create a mock REST API for development purposes.
// Solution:
//---------------------------------------------------------------
// JSON Server is a helpful tool for frontend developers to simulate a backend server during the development phase. It allows you to quickly create a RESTful API using a JSON file as a data source. Here's how it works:

// Installation: JSON Server can be installed globally via npm using the command npm install -g json-server.
// Data Preparation: Prepare a JSON file containing the data you want to serve as your API. Each top-level key in the JSON file represents a resource (e.g., users, posts).
// Start JSON Server: Run JSON Server by executing the command json-server --watch db.json in the terminal, where db.json is the filename containing your data.
// Accessing Endpoints: JSON Server automatically generates RESTful endpoints for each resource in your JSON file. For example, if you have a users resource, you can access it at http://localhost:3000/users.
// CRUD Operations: JSON Server supports CRUD operations. You can perform actions like creating, reading, updating, and deleting data using standard HTTP methods (POST, GET, PUT, DELETE) on the respective endpoints.
// Filtering, Sorting, Pagination: JSON Server allows filtering, sorting, and pagination by adding query parameters to the endpoint URLs. For instance, to filter users by name, you can use http://localhost:3000/users?name=John.
// Middleware and Custom Routes: JSON Server supports middleware and custom routes, enabling developers to add additional functionality or modify default behavior as needed.
// Using JSON Server, developers can efficiently prototype frontend applications without depending on a backend server, making development faster and more independent.
//---------------------------------------------------------------
