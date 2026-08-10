const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    barber: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: "pending"
    }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
