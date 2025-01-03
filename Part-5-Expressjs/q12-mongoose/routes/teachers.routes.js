const express = require("express");
const fs = require("fs");
const teachersRouter = express.Router();

// Read (HTTP GET)
teachersRouter.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ msg: "Error reading file", err });
    } else {
      let parsedData = JSON.parse(data);
      res.send({ msg: "This is required teachers data", teachers: parsedData.teachers });
    }
  });
});

// Create (HTTP POST) add new data.
teachersRouter.post("/", (req, res) => {
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  parsedData.teachers.push(req.body);
  fs.writeFileSync("./db.json", JSON.stringify(parsedData));
  res.send("The new teacher data added...");
});

// DELETE Request - Delete a teacher by ID
teachersRouter.delete("/:id", (req, res) => {
  // const teacherId = req.params.id; // for string id
  const teacherId = Number(req.params.id); // for number id
  try {
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data);
    const updatedTeachers = parsedData.teachers.filter((teacher) => teacher.id !== teacherId);
    if (updatedTeachers.length === parsedData.teachers.length) {
      return res.status(404).send({ msg: "Teacher not found" });
    }

    parsedData.teachers = updatedTeachers;
    fs.writeFileSync("./db.json", JSON.stringify(parsedData));
    res.send({ msg: "Teacher deleted successfully" });
  } catch (err) {
    res.status(500).send({ msg: "An error occurred", err });
  }
});

module.exports = { teachersRouter };
