const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  admin: String,
  instructor: String,
  student: String,
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = { usersModel };
 