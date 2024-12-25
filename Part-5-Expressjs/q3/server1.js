//   STATIC FILES
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public")); //   STATIC FILES

app.get("/", function (req, res) {
  res.render("index", { age: 12 });
});

app.get("/about", function (req, res) {
  res.render("about", { anyName: "Sarthi" });
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/snow", function (req, res) {
  res.render("snow");
});

// error handeling in express
app.get("/error1", function (req, res, next) {
  throw Error("Something Went Wrong!");
});

app.get("/error2", function (req, res) {
  throw Error(" i don't know Something Went Wrong!.......");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000, () => {
  console.log(" Server is running at http://localhost:3000 ");
});
