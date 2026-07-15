const mongoose = require("mongoose");
const Barber = require("./Barber");

const ReviewSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    barber: {
        type: String,
        default: "General"
    },
    date: {
        type: String,
        default: new Date().toISOString()
    }
});

module.exports = mongoose.model("Review", ReviewSchema);