const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;


mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/taskmanager")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});