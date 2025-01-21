const express = require("express");
const { connectDB } = require("./dbConfig");
const { noteRouter } = require("./routes/note.routes");
const { userRouter } = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(8080, () => {
  connectDB();
  console.log("Server is running at http://localhost:8080");
});
