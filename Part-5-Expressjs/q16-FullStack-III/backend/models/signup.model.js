const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const SignupModel = mongoose.model("signup", signupSchema);
module.exports = { SignupModel };
    