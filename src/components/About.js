import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about">
            <h2>About Jr.OfficialFades</h2>

            <p className="about-text">
                A shop built on craft. Since opening in 2009, Jr.OfficialFades has focused on
        precision cuts, clean fades, and traditional grooming done right. Every barber
        here is trained to deliver consistency, detail, and a premium experience.
            </p>

            <div className="about-grid">
                <div className="about-card">
                    <h3>Opend in 2024</h3>
                    <p>Have been serving Elgin with quality cuts and shaves.</p>
                </div>

                <div className="about-card">
                    <h3>Location</h3>
                    <p>470 Hendee st, Elgin IL</p>
                </div>

                <div className="about-card">
                    <h3>Hours</h3>
                    <p>Mon-Sat: 9am-7pm<br />Sun: Cosed</p>
                </div>
            </div>
        </section>
    );
}

export default About;