//  Implementation of Third-Party Middlewares
// helmet Example

const express = require("express");
const helmet = require("helmet");
const app = express();

// Use Helmet to secure HTTP headers
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World with Helmet!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
