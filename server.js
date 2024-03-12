require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors({ credentials: true }));

// test api
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to our server!" });
});

// port
const port = process.env.PORT || 8080;

// db connection
connectToDb();

// listen server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
