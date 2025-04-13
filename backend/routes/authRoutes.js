const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserInfo } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get user info - protected route
router.get("/me", authMiddleware, getUserInfo);

module.exports = router;
