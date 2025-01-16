const express = require("express");
const { connectToDB } = require("./db");
const { UserModel } = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, age, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      const newUser = new UserModel({ name, age, email, pass: hash });
      await newUser.save();
      res.send("User has been added to the DB");
    });
  } catch (error) {
    res.send(error);
  }
});

app.post("/auth", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const matchingUser = await UserModel.findOne({ email });
    if (matchingUser) {
      bcrypt.compare(pass, matchingUser.pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ course: "bedc_cap" }, "masai", {
            expiresIn: 30,
          });
          res.send({ msg: "Login Successfull!", token });
        }
      });
    } else {
      res.send("Wrong Credentials");
    }
  } catch (error) {
    res.send(error);
  }
});

//Only Authenticated users shouls be able to access these routes
// http://localhost:8080/movies?token=eyJhbGciOiyuujnbteryiiulh
app.get("/movies", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    jwt.verify(token, "masai", (err, decoded) => {
      if (decoded) {
        console.log(decoded);
        res.send("Watching the movie...");
      } else {
        res.send(err);
      }
    });
  } else {
    res.send("You are not authorized!");
  }
});

app.get("/series", (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "masai", (err, decoded) => {
      if (decoded) {
        console.log(decoded);
        res.send("Watching the series...");
      } else {
        res.send(err);
      }
    });
  } else {
    res.send("You are not authorized!");
  }
});

app.listen(8080, () => {
  connectToDB();
  console.log("Server is running at http://localhost:8080");
});
