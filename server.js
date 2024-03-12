require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const authRouter = require("./routes/auth.route");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

// test api
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to our server!" });
});

// bypassed api
app.use("/api/v1/auth", authRouter);

// port
const port = process.env.PORT || 8080;

// db connection
connectToDb();

// listen server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
