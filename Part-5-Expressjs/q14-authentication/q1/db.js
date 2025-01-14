const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sarthiparth683:sarthi@cluster0.qxu1a.mongodb.net/authCap?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to Atlas DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDB };
