const mongoose = require("mongoose");



const BarberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        riquired: true
    },
    rating: {
        type: Number,
        default: 5
    },
    specialties: {
    type: [String],
    default: []
    },
    image: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("Barber", BarberSchema);