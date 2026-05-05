require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});