const mongoose = require("mongoose");
const coursesSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  duration: String,
  maximumCapacity: Number,
});

const coursesModel = mongoose.model("courses", coursesSchema);

module.exports = { coursesModel };
  