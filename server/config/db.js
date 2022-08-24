const mongoose = require("mongoose");

const db = (url) => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("something went wrong: " + error);
  }
};

module.exports = db;

