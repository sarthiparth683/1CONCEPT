const express = require("express");
const fs = require("fs");
const { usersModel } = require("../models/users.model");
const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await usersModel.find();
    res.send({ msg: "This is required users data", users: users });
  } catch (err) {
    console.log(err);
  }
});

usersRouter.post("/", async (req, res) => {
  const usersData = req.body;
  try {
    const newUsers = new usersModel(usersData);
    await newUsers.save();
    res.send({ msg: "users added successfully" });
  } catch (err) {
    res.send({ msg: "Error", err });
  }
});

usersRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await usersModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "users updated successfully!!" });
  } catch (err) {
    res.send({ msg: "Error", err });
  }
});

usersRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await usersModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "users Deleted successfully!!" });
  } catch (err) {
    res.send({ msg: "Error", err });
  }
});

module.exports = { usersRouter };
