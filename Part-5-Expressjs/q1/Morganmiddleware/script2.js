const express = require("express");
const validateBody = require("./middleware/validation");
const logger = require("./middleware/logger");
const app = express();
const PORT = 1234;
const fs = require("fs");
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require("multer");

const accessLogStream = fs.createWriteStream("access.log", { flags: "a" });

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms", {
    stream: accessLogStream,
  })
);

app.use(helmet());
app.use(express.json()); // global middleware

app.post("/add-movie", logger, validateBody, (req, res) => {
  res.status(201).send("Movie added successfully!");
});

app.get("/users", (req, res) => {
  res.json({
    users: ["user1", "user2"],
  });
});

app.get("/data", (req, res) => {
  res.json({
    data: "DATA",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
