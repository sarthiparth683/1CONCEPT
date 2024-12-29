 //  Implementation of Third-Party Middlewares
 // body-parser Example:

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Use body-parser to parse JSON bodies
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});