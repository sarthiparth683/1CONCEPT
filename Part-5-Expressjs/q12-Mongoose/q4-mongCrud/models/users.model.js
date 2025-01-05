const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  admin: String,
  email: String,
  age: Number,
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = { usersModel };
