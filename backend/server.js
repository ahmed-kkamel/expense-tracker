const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
