const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const { studentsRouter } = require("./routes/students.routes");
const { teachersRouter } = require("./routes/teachers.routes");
const cors = require("cors");

const app = express();
app.use(express.json()); // middleware to parse the body of the request
app.use(cors()); // cors should be implemented before routing only

app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);

app.listen(8080, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/mongoose01");
  console.log("connected to DB");
  console.log(" Server is running at http://localhost:8080 ");
});
