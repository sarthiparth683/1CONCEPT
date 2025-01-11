const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    age: {
      type: Number,
      requird: true,
      validate: {
        validator: (value) => {
          return value >= 18 && value <= 65;
        },
        message: "Age should be in between 18 and 65",
      },
    },
    location: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
  },
  {
    versionKey: false,
  }
);

const ProfileModel = mongoose.model("profile", profileSchema);

module.exports = { ProfileModel };
