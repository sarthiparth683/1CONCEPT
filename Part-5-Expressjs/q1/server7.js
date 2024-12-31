// CORS -  Implementation, and how to use cors middleware
// in testclient/client.html - to test cors
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { studentsRouter } = require("./routes/students.routes");
const { teachersRouter } = require("./routes/teachers.routes");
const app = express();
app.use(express.json()); // middleware to parse the body of the request
app.use(cors());

app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);

app.listen(8080, () => {
  console.log(" Server is running at http://localhost:8080 ");
});
