const express = require("express");
const fs = require("fs");
const { coursesModel } = require("../models/courses.model");
const coursesRouter = express.Router();

coursesRouter.get("/", async (req, res) => {
  const courses = await coursesModel.find();
  res.send({ msg: "This is required users data", courses: courses });
});

coursesRouter.post("/", async (req, res) => {
  const coursesData = req.body;
  const newCourses = new coursesModel(coursesData);
  await newCourses.save();
  res.send({ msg: "users added successfully" });
});

module.exports = { coursesRouter };
