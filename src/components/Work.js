import React from "react";
import "./Work.css";

function Work() {
    return(
    <section className="work">
        <h2>Our Work</h2>

        <div className="work-tabs">
            <button className="active-tab">Trending</button>
            <button>Most Popular</button>
        </div>

        <div className="work-grid">
            <div className="work-card">
                <h3>Side Part Taper</h3>
                <span className="work-price"$38></span>
                <p>Tight nape taper, uniform length on top. One of our most requeated cuts.</p>
                <button className="work-btn">Book this cut</button>
            </div>

             <div className="work-card">
          <h3>Clean Taper</h3>
          <span className="work-price">$38</span>
          <p>Tight nape taper, uniform length on top. One of our most requested cuts.</p>
          <button className="work-btn">Book this cut</button>
        </div>

            <div className="work-card">
                <h3>Curly Crop + Beard</h3>
                <span className="work-price">$55</span>
                <p>Texture curly top faded in a shaped beard. Full combo, one session.</p>
                <button className="work-btn">Book this cut</button>
            </div>
        </div>
    </section>
    );
}

export default Work;