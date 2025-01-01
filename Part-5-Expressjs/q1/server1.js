 // all routing in same file
const express = require("express");
const fs = require("fs");
const { parse } = require("path");
const app = express();
app.use(express.json()); // middleware to parse the body of the request

app.get("/", (req, res) => {
  res.send("Home");
});

// GET Request
app.get("/students", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ msg: "Error reading the file", err });
    } else {
      res.send(data); // gives you full data
      // let parsedData = JSON.parse(data);
      // res.send(parsedData.students); // gives  students data only
      //   let parsedData = JSON.parse(data);
      // res.send(parsedData.teachers); // gives teachers data only
      //   let parsedData = JSON.parse(data);
      //   res.send({ "msg": "Teachers data...", teachers: parsedData.teachers });
    }
  }); 
});

// get Request - get teachers data
app.get("/teachers", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ msg: "Error reading file", err });
    } else {
      let parsedData = JSON.parse(data);
      res.send({ msg: "This is required teachers data", teachers: parsedData.teachers });
    }
  });
});

// POST Request - post teachers data
app.post("/teachers", (req, res) => {
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  parsedData.teachers.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("The new teacher data added...");
});

app.listen(8080, () => {
  console.log(" Server is running at http://localhost:8080 ");
});
