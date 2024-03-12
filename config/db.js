const mongoose = require("mongoose");

// uri
const uri = process.env.MONGO_URI;

const connectToDb = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB connected successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDb;
