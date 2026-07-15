import React from "react";
import './Services.css';

function Services(){
    return (
        <section className="service">
            <h2>Our Services</h2>
            <div className="service-grid">
              <div className="service-card">
                <h3>Classic Cut</h3>
                <p>Precision scissor or clipper cut, finished with a hot towel and styling </p>
                <div className="service-info">
                  <span>$35</span>
                  <span>45 min</span>  
                </div>
              </div>

              <div className="service-card">
                <h3>Fade & Taper</h3>
                <p>Seamless skin-to-length transitions, bespke to your head shape.</p>
                <div className="service-info">
                    <span>$42</span>
                    <span>50 min</span>

                </div>
             </div>

             <div className="service-card">
               <h3>Beard Shaping</h3>
               <p>Line work, sculpting, and conditioning with warm lather and sraigth razor.</p>
               <div className="service-info">
                <span>$28</span>
                <span>30 min</span>
               </div>
             </div>

            </div>

        </section>
    );
}

export default Services;