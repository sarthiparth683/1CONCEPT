const express = require("express");
const fs = require("fs");
const { usersModel } = require("../models/users.model");
const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
  const users = await usersModel.find();
  res.send({ msg: "This is required users data", users: users });
});

usersRouter.post("/", async (req, res) => {
  const usersData = req.body;
  const newUsers = new usersModel(usersData);
  await newUsers.save();
  res.send({ msg: "users added successfully" });
});

module.exports = { usersRouter };
 