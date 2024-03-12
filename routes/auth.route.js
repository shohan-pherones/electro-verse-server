const express = require("express");
const { createUser, loginUser } = require("../controllers/auth.controller");

const router = express.Router();

// registration
router.post("/register", createUser);

// login
router.post("/login", loginUser);

module.exports = router;
