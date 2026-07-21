import React, { useEffect, useState } from "react";
import { getBarbers } from "../api/barberApi";
import "./Barbers.css";

function Barbers() {
    const [barbers, setBarbers] = useState([]);

    useEffect(() => {
        async function loadBarbers() {
            const data = await getBarbers();
            setBarbers(data);
        }
        loadBarbers();
    }, []);

    return (
        <section className="barber">
            <h2>Your Barber</h2>

            <div className="barber-grid">
                {barbers.map((barber) => (
                    <div className="barber-card" key={barber._id}>
                        <h3>{barber.name}</h3>
                        <span className="barber-rating">{barber.rating}</span>
                        <p className="barber-role">{barber.experience} years</p>
                        <p className="barber-specialties">
                            {barber.specialties?.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Barbers;
