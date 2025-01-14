const express = require("express");
const { connectToDB } = require("./db");
const { UserModel } = require("./models/user.model");

const app = express();

app.use(express.json());

// users get request to get all data
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find(); // Fetch all users
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// users post data to add data in Data Base
app.post("/users", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.send("User has been added to the DB");
  } catch (error) {
    res.send(error);
  }
});

// Authentication of user
app.post("/auth", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const matchingUser = await UserModel.findOne({ email, pass });
    if (matchingUser) {
      res.send({ msg: "Login Successfull!", token: "mov-ser-access" });
    } else {
      res.send("Wrong Credentials");
    }
  } catch (error) {
    res.send(error);
  }
});

//Only Authenticated users should be able to access these routes
// http://localhost:8080/movies?token=mov-ser-access
app.get("/movies", (req, res) => {
  const { token } = req.query;
  if (token === "mov-ser-access") {
    res.send("Watching the Movie...");
  } else {
    res.send("You are not authorized!");
  }
});

app.get("/series", (req, res) => {
  const { token } = req.query;
  if (token === "mov-ser-access") {
    res.send("Watching the Series...");
  } else {
    res.send("You are not authorized!");
  }
});

app.listen(8080, () => {
  connectToDB();
  console.log("Server is running at http://localhost:8080");
});
