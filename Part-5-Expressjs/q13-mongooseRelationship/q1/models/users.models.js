const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, requird: true, unique: true },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true }, // to show virtual data in json formate
  }
);

userSchema.virtual("profile", {
  ref: "profile",
  localField: "_id",
  foreignField: "userId",
  justOne: true, // for one to one relation only if removed then it is one to many relation
});

userSchema.virtual("order", {
  ref: "order",
  localField: "_id",
  foreignField: "userId",
});
const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
