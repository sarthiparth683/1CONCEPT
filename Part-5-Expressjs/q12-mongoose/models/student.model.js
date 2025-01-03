const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = { studentModel };
