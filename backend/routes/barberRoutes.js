const express = require("express");
const Barber = require("../models/Barber");

const router = express.Router();

// GET all barbers
router.get("/", async (req, res) => {
  try {
    const barbers = await Barber.find();
    res.json(barbers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching barbers" });
  }
});

// POST create a new barber
router.post("/", async (req, res) => {
  try {
    const barber = new Barber(req.body);
    await barber.save();
    res.json(barber);
  } catch (error) {
    res.status(500).json({ message: "Error creating barber" });
  }
});

// DELETE a barber
router.delete("/:id", async (req, res) => {
  try {
    await Barber.findByIdAndDelete(req.params.id);
    res.json({ message: "Barber deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting barber" });
  }
});

module.exports = router;
