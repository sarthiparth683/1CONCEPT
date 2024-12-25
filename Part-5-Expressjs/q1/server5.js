// ROUTING and DYNAMIC ROUTING USING : COLON
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Middleware-1 Working...");
  next();
});

app.get("/", function (req, res) {
  res.send("<h1>Hello World !</h1>");
});

app.get("/profile", function (req, res) {
  res.send("<h1>Profile</h1>");
});

// Dunamic Routing using colon :
app.get("/profile/:username", function (req, res) {
  res.send(`<h1>Hello form ${req.params.username}</h1>`);
});

app.listen(3000, () => {
  console.log(" Server is running at http://localhost:3000 ");
});
