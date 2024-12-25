//  MIDDLEWARE..??
const express = require("express");
const app = express();
// app.use(); // middleware to parse the body of the request - middle ware runs before any router

app.use(function (req, res, next) {
  res.write("<h1>Middleware</h1>");
  console.log("Middleware is running");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Home-1<h1/>");
});

app.get("/first", (req, res) => {
  res.send("<h1>First<h1/>");
});

app.get("/second", (req, res) => {
  res.send("<h1>Second<h1/>");
});

app.listen(8080, () => {
  console.log(" Server is running at http://localhost:8080 ");
});
