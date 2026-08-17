const dns = require("dns")
dns.setServers(["1.1.1.1", "8.8.8.8"]); // Cloudflare + Google DNS 

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const AppointmentRoutes = require("./routes/AppointmentRoutes");
const barberRoutes = require("./routes/barberRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");
const haircutRoutes = require("./routes/haircut");

const app = express();   // ✅ MUST come before app.use()

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// API routes
app.use("/api/auth", authRoutes);          // ✅ now safe
app.use("/api/appointments", AppointmentRoutes);
app.use("/api/barbers", barberRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/haircut", haircutRoutes);

// Connect to MongoDB
connectDB();

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
