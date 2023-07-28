const mongoose = require("mongoose");

const mongoURI = "mongodb://0.0.0.0:27017";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
