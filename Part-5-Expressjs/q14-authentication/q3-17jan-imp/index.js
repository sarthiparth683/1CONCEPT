const express = require("express");
const { connectDB } = require("./db");
const { UserModel } = require("./models/user.model"); // imported data in form or model
const bcrypt = require("bcrypt"); // use to bcrypt data like password
const jwt = require("jsonwebtoken");
const { auth } = require("./middleware/auth.middleware");
const { rbac } = require("./middleware/rbac.middleware");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, pass, role } = req.body; // name email and pass are taken form req.body
  try {
    bcrypt.hash(pass, 6, async (err, hash) => {
      // bcrypt is used here for password and 6 time it will be bcrypted
      if (err) {
        res.json({ err });
      }
      const newUser = new UserModel({
        name,
        email,
        role,
        pass: hash, // password will saved in hashed formate due to bcrypt
      });
      await newUser.save();
      res.json({ msg: "New user has been added" });
    });
  } catch (error) {
    res.json({ error });
  }
});

app.post("/auth", async (req, res) => {
  const { email, pass } = req.body; // email and password is taken from req.body

  try {
    const matchingUser = await UserModel.findOne({ email }); // email is find from DB not pass because password is in hashed formate
    if (matchingUser) {
      bcrypt.compare(pass, matchingUser.pass, (err, result) => {
        // pass here is taken form DB and matchingUser.pass is bcrypted password
        // password is bcrypted and then compared because if compared with findOne it will not be equal
        if (result) {
          // result will be true when bcrypt and DB password will be true
          const token = jwt.sign({ userId: matchingUser._id }, "masai");
          res.json({ msg: "Login Successfull!", token });
        } else {
          res.json({ msg: "Wrong Credentials" });
        }
      });
    }
  } catch (error) {
    res.json({ error });
  }
});

//provide access to admin and user
app.get("/movies", auth, rbac(["admin", "user"]), (req, res) => {
  // auth middleware is used in this route
  res.json({ msg: "Watching a movie" });
});

//provide access to admin and user
app.get("/series", auth, rbac(["admin", "user"]), (req, res) => {
  // auth middleware is used in this route
  res.json({ msg: "Watching a series" });
});

//provide access to admin
app.get("/userdata", auth, rbac(["admin"]), (req, res) => {
  // auth middleware is used in this route
  res.json({ msg: "User data" });
});
 
app.listen(8080, () => {
  connectDB();
  console.log("Server is running at http://localhost:8080");
});
