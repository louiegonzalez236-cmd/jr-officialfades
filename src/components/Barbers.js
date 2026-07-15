import React from "react";
import "./Barbers.css"

function Barbers() {
    return (
        <section className="barber">
            <h2>Your Barber</h2>

            <div className="barber-grid">
                <div className="barber-card">
                    <h3>Alexis Sancez</h3>
                    <span className="barber-rating">4.8</span>
                    <p className="barber-role">2 years</p>
                    <p className="barber-specialties">Classic cuts, Hot Shaves</p>
                </div>
            </div>
        </section>    
    );
}

export default Barbers;