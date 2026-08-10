const express = require("express");
const Appointment = require("../models/Appointment");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// ✅ Protected routes
router.get("/", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error("GET ALL ERROR:", error);
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

router.get("/today", authMiddleware, async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    const appointments = await Appointment.find({ date: today });
    res.json(appointments);
  } catch (error) {
    console.error("TODAY GET ERROR:", error);
    res.status(500).json({ message: "Error fetching today's appointments" });
  }
});

router.get("/date/:date", authMiddleware, async (req, res) => {
  try {
    const { date } = req.params;
    const appointments = await Appointment.find({ date });
    res.json(appointments);
  } catch (error) {
    console.error("DATE FILTER ERROR:", error);
    res.status(500).json({ message: "Error filtering by date" });
  }
});

// Public route — booking doesn’t need auth
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    console.log("APPOINTMENT ERROR:", error);
    res.status(500).json({ message: "Error creating appointment" });
  }
});

// Protected delete route
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment" });
  }
});

module.exports = router;
