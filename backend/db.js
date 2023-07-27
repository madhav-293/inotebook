const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = async () => {
  mongoose.connect(mongoURI, await console.log("Connected to mongo"));
};
module.exports = connectToMongo;
