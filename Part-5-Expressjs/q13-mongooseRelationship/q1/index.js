const express = require("express");
const { connectToDB } = require("./dbConfig");
const { userRouter } = require("./routes/user.routes");
const { profileRouter } = require("./routes/profile.routes");
const { orderRouter } = require("./routes/order.routes");

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/profiles", profileRouter);
app.use("/orders", orderRouter);

app.listen(8080, () => {
  connectToDB();
  console.log("server is running at http://localhost:8080");
});
