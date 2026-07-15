const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// GET all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

//POST creat appointment
router.post("/", async (req,res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);
  } catch (error) {
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

module.exports = router;