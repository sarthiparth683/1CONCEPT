const express = require("express");
const { connectDB } = require("./dbConfig");
const { signupRouter } = require("./routes/signup.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/signup", signupRouter);

app.listen(8080, () => {
  connectDB();
  console.log("server running at http://localhost:8080");
});
      