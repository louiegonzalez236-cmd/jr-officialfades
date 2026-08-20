import React, { useState } from "react";
import { createAppointment } from "../api/appointmentApi";
import { getHaircutRecommendation } from "../api/haircutApi";
import "./Appointment.css";


function Appointment() {
    const [form, setForm] = useState({
        name: "",
        barber: "",
        date: "",
        time: "",
        service: ""
    });

    const [photo, setPhoto] = useState(null);
    const [recommendations, setRecommendations] = useState(null);
    const [loadingHaircut, setLoadingHaircut] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleHaircutSubmit = async () => {
        if (!photo) {
            alert("Please select a photo first");
            return;
        }

        setLoadingHaircut(true);
        try {
            const result = await getHaircutRecommendation(photo);
            setRecommendations(result.recommendations);
        } catch (error) {
            console.error("Error getting haircut recommendation:", error);
            alert("Something went wrong getting your recommendation. Please try again");
        } finally{
            setLoadingHaircut(false);
        }
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

            <div className="haircut-recommender">
                <h2>Get a Haircut Recommendation</h2>
                <p>Upload a photo and let AI suggest style that would suit you.</p>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                />

                <button onClick={handleHaircutSubmit} disabled={loadingHaircut}>
                    {loadingHaircut ? "Analyzing..." : "Get Recommendation"}
                </button>

                {recommendations && (
                    <ul className="haircut-result">
                        {recommendations.map((rec, index) => (
                            <li key={index}>
                                <strong>{rec.style}</strong>
                                <p>{rec.reason}</p>
                            </li>    
                        ))}

                    </ul>
                )}
            </div>
        </section>
    );
}

export default Appointment;
