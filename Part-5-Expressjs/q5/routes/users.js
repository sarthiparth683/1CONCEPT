// install mongodb setup from website
// npm i mongoose - install mongoosejs
// make schema
// create model and export

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("user", userschema);
