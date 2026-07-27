import React, { useState } from "react";
import { createAppointment } from "../api/appointmentApi";
import "./Appointment.css";

function Appointment() {
    const [form, setForm] = useState({
        name: "",
        barber: "",
        date: "",
        time: "",
        service: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createAppointment(form);
        alert("Appointment booked successfully!");
        console.log(result);
    };

    return (
        <section className="appointment">
            <h2>Book an Appointment</h2>

            <form onSubmit={handleSubmit} className="appointment-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="barber"
                    placeholder="Preferred Barber"
                    value={form.barber}
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                />

                <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="service"
                    placeholder="Service (Fade, Beard, etc.)"
                    value={form.service}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Book Appointment</button>
            </form>
        </section>
    );
}

export default Appointment;
