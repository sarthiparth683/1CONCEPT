const express = require("express");
const fs = require("fs");
const studentsRouter = express.Router();

// GET Request
studentsRouter.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ msg: "Error reading the file", err });
    } else {
      //   res.send(data); // gives you all the  data of the file
      let parsedData = JSON.parse(data); // to parse the data

      res.send({ msg: "This is required Students data...", students: parsedData.students });
      //   res.send(parsedData.students); // gives  students data only
      //   res.send(parsedData.teachers); // gives teachers data only
    }
  });
});

studentsRouter.get("/test", (req, res) => {
    res.send("Test...")
})

module.exports = {studentsRouter};
