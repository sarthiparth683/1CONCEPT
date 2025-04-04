const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const { usersRouter } = require("./routes/users.routes");
const { coursesRouter } = require("./routes/courses.routes");

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/courses", coursesRouter); 

app.listen(8080, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/LMS_DB");
  console.log("connected to mongoDB");
  console.log("server is running at http://localhost:8080");
});
 