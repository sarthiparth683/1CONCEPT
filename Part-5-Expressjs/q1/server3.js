// CRUD and Middleware
const express = require("express");
const app = express();
//  Adds middleware to the application. Middleware are functions that have access to the request (req), response (res), and the next middleware function in the application's request-response cycle.Use Case: Logging, authentication, parsing request bodies, etc.
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});
app.use(function (req, res, next) {
  // console.log("Middleware-1 Working");
  res.send("<h1>Middleware-1 Working</h1>");
  next();
});
app.get("/", function (req, res) {
  // Fetching or reading data from the server.
  res.send("<h1>Hello World !</h1>");
});
app.put("/users/:id", (req, res) => {
  // Updating existing data on the server.
  res.send(`User with ID ${req.params.id} updated`);
});
app.delete("/users/:id", (req, res) => {
  res.send(`User with ID ${req.params.id} deleted`);
});
app.listen(8080, () => {
  console.log("server is running at http://localhost:8080");
});
