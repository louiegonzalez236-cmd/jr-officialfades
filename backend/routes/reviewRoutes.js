const express = require("express");
const Review = require("../models/Reviews");

const router = express.Router();

//GET all reviews
router.get("/", async (req, res) =>{
    try{
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ Message:"Error fetching reviews" });
    }
});

//POST creat review
router.post("/", async (req, res) =>{
    try {
        const review = new Review(req.body);
        await review.save();
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: "Error creating review "});
    }
});

//DELETE a review
router.delete("./:id", async (req,res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.json({ message: "Review deleted " });
    } catch (error) {
        res.status(500).json({ message: "Error deleting review"});
    }
});

module.exports = router;