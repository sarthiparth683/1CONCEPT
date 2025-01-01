const express = require("express");
const app = express();
const userRouter = require("./test/test1");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/test1", userRouter); // It allows you to define middleware functions

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
