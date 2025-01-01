// CRUD and Middleware
const express = require("express");
const app = express();

//  Adds middleware to the application. Middleware are functions that have access to the request (req), response (res), and the next middleware function in the application's request-response cycle.Use Case: Logging, authentication, parsing request bodies, etc.
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});
app.use(function (req, res, next) {
  console.log("Middleware-1 Working");
  next();
});
app.use(function (req, res, next) {
  console.log("Middleware-2 Working");
  next();
});

app.get("/", function (req, res) {
  res.send("<h1>Hello World !</h1>");
});

app.get("/profile", function (req, res) {
  res.send("<h1>Profile</h1>");
});
app.get("/users", (req, res) => {
  // Handles HTTP GET requests and  Fetching or reading data from the server.
  res.send("This is the users list");
});

app.post("/users", (req, res) => {
  // Handles HTTP POST requests used for Creating or submitting new data to the server.
  res.send("User created");
});

app.put("/users/:id", (req, res) => {
  // Handles HTTP PUT requests  Used for Updating existing data on the server.
  res.send(`User with ID ${req.params.id} updated`);
});

app.delete("/users/:id", (req, res) => {
  //Deleting data from the server.
  res.send(`User with ID ${req.params.id} deleted`);
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
