  //  Implementation of Third-Party Middlewares
  // morgan Example:

const express = require("express");
const morgan = require("morgan");
const app = express();

// Use Morgan for logging requests
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World with Morgan logging!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});