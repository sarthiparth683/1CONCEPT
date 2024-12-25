// ejs in express
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/snow", function (req, res) {
  res.render("snow");
});

app.listen(3000, () => {
  console.log(" Server is running at http://localhost:3000 ");
});
