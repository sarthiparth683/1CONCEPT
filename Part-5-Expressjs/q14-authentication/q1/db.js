const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sarthiparth683:sarthi@cluster0.gvmdi.mongodb.net/test1?retryWrites=true&w=majority&appName=Cluster0");

    console.log("Connected to Atlas DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDB };

// in mongoDb Atlas login website - DATA BASE - cluster - connect drivers - get the link

// a link is provided - mongodb+srv://sarthiparth683:sarthi@cluster0.qxu1a.mongodb.net/name?retryWrites=true&w=majority&appName=Cluster0
// 3 important thing - name, password, DB name
//in this link userName and password is important
// DB name - is written in between slash and question Mark -  /name?
// if forgotten password then recreate new cluster
