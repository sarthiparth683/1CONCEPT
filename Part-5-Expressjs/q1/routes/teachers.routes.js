const express = require("express");
const fs = require("fs");
const teachersRouter = express.Router();

// get Request - get teachers data
teachersRouter.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ msg: "Error reading file", err });
    } else {
      let parsedData = JSON.parse(data);
      //   res.send(data); // gives you all the  data of the file
      res.send({ msg: "This is required teachers data", teachers: parsedData.teachers });
      //   res.send(parsedData.students); // gives  students data only
      //   res.send(parsedData.teachers); // gives teachers data only
    }
  });
});

// POST Request - post teachers data
teachersRouter.post("/", (req, res) => {
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  parsedData.teachers.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("The new teacher data added...");
});

module.exports = { teachersRouter };
