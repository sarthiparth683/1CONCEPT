const express = require("express");
const { SignupModel } = require("../models/signup.model");
const signupRouter = express.Router();

// Post 
signupRouter.post("/", async (req, res) => {
  try {
    const newSignup = new SignupModel(req.body);
    await newSignup.save();
    res.status(200).json({ msg: "Signup successful !" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
});
// Get
signupRouter.get("/", async (req, res) => {
  try {
    const signup = await SignupModel.find();
    res.status(200).json({ signup });
  } catch (error) {
    res.status(500).json({ msg: "Internal server Error", error });
  }
});

// Update
signupRouter.patch("/:id", async (req, res) => {
  try {
    const updatedSignup = await SignupModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSignup ? { msg: "Updated", updatedSignup } : { msg: "Not found" });
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
});

// Delete
signupRouter.delete("/:id", async (req, res) => {
  try {
    const deletedSignup = await SignupModel.findByIdAndDelete(req.params.id);
    res.json(deletedSignup ? { msg: "Deleted" } : { msg: "Not found" });
  } catch (error) {
    res.status(500).json({ msg: "Error", error });
  }
});


module.exports = { signupRouter };
