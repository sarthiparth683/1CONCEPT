const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("test-1 file - Main Route");
  });
  
userRouter.get("/profile", (req, res) => {
  res.send("test-1 file -  User Profile");
});

module.exports = userRouter;
