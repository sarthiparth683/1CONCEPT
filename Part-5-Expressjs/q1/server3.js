const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", function (req, res) {
  res.send("<h1>Profile</h1>");
});

app.listen(3000, () => {
  console.log(" Server is running at http://localhost:3000 ");
});
