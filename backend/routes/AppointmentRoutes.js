const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// GET all appointments
router.get("/today", async (req, res) => {
  try{
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const appointments = await Appointment.find({date: today});
    res.json(appointments);
  } catch (error) {
    console.error("TODAY GET ERROR", error);
    res.status(500).json({message: "Error fetching today's appointments"});
  }
});

//POST creat appointment
router.post("/", async (req,res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    console.log("APPOINTMENT ERROR:", error);   // <-- ADD THIS
    res.status(500).json({message: "Error creating appointment"});
  }
});


//DLETE appointment
router.delete("/:id", async (req, res) =>{
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({message: "Appointment deleted"});
    } catch (error) {
        res.status(500).json({ message: "Error deleting appointment"});
    }
    
});

//Show all appointments
router.get("/date/:date", async (req, res) => {
  try {
    const { date } = req.params;
    const appointments = await Appointment.find({ date });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error filtering by date" });
  }
});


module.exports = router;