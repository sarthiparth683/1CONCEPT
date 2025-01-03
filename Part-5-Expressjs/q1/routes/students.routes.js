const express = require("express");
const fs = require("fs");
const studentsRouter = express.Router();

//  (HTTP GET) Read
studentsRouter.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ msg: "Error reading the file", err });
    } else {
      //   res.send(data); // gives you all the  data of the file
      let parsedData = JSON.parse(data); // to parse the data
      res.send({ msg: "This is required Students data...", students: parsedData.students });
        // res.send(parsedData.students); // gives  students data only
      //   res.send(parsedData.teachers); // gives teachers data only
    }
  });
});

// POST Request - add data
studentsRouter.post("/", (req, res) => {
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  parsedData.students.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("The new students data added...");
});

// DELETE Request - Delete a students by ID
studentsRouter.delete("/:id", (req, res) => {
  // const studentsId = req.params.id; // for string id
  const studentsId = Number(req.params.id); // for number id
  try {
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data);
    const updatedstudents = parsedData.students.filter((students) => students.id !== studentsId);
    if (updatedstudents.length === parsedData.students.length) {
      return res.status(404).send({ msg: "Teacher not found" });
    }

    parsedData.students = updatedstudents;
    fs.writeFileSync("./db.json", JSON.stringify(parsedData));
    res.send({ msg: "Teacher deleted successfully" });
  } catch (err) {
    res.status(500).send({ msg: "An error occurred", err });
  }
});
module.exports = { studentsRouter };
