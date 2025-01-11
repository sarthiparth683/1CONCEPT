const express = require("express");
const { UserModel } = require("../models/users.models");
const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send({ msg: "User created successfully", user });
  } catch (err) {
    res.send({ msg: err.message });
  }
});

userRouter.get("/", async (req, res) => {
  const users = await UserModel.find().populate("profile").populate("order");
  res.send(users);
});
module.exports = { userRouter };
