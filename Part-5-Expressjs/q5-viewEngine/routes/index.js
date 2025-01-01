var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  const createduser = await userModel.create({
    username: "harsh",
    name: "harsh",
    age: 25,
  });
  res.send(createduser); 
});

router.get("/allusers", async function (req, res) {
  // let allusers = await userModel.find(); //to find all user
  let allusers = await userModel.findOne({ username: "harsh" }); // to find one user
  res.send(allusers);
});

router.get("/delete", async function (req, res) {
  let deleteduser = await userModel.findOneAndDelete({
    username: "harsh",
  });
  res.send(deleteduser);
});

module.exports = router;
