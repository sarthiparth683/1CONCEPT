const express = require("express");
const fs = require("fs");
const { studentModel } = require("../models/student.model");
const studentsRouter = express.Router();

//  (HTTP GET) Read
studentsRouter.get("/", async (req, res) => {
  const students = await studentModel.find();
  res.send({ msg: "This is the required students data", students: students });
});

// POST Request - add data
studentsRouter.post("/", async (req, res) => {
  const studentData = req.body;
  const newStudent = new studentModel(studentData);
  await newStudent.save();
  res.send({ msg: "Student added successfully" });
});

module.exports = { studentsRouter };
