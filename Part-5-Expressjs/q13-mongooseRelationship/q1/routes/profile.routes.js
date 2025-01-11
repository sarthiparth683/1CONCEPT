const express = require("express");
const { ProfileModel } = require("../models/profile.models");
const profileRouter = express.Router();

profileRouter.post("/", async (req, res) => {
  try {
    const profile = new ProfileModel(req.body);
    await profile.save();
    res.send({ msg: "Profile created successfully", profile });
  } catch (err) {
    res.send({ msg: err.message });
  }
});

module.exports = { profileRouter };
