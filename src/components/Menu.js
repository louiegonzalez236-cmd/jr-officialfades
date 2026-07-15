import React from "react";
import './Menu.css';

function Menu(){
    return (
        <section className="menu">
          <h2>The Menu</h2>
          <p className="menu-subtitle">
            Every cut listed includes a wash, style, and hot towel neck finish. Prices reflect walk-in rates-loyalty clients receive 10% off.
         </p>
         <div className="menu-grid">
           <div className="menu-card">
              <h3>Haircut Styles</h3>
              <span className="price-range">$28-$35</span>
              <p>Entry cuts - classic, buzz, side part</p>
           </div>

           <div className="menu-card">
            <span className="price-range">$38-$42</span>
            <p>Signature cuts - fades, crops, tapers</p>
           </div>

           <div className="menu-card">
            <span className="price-range">$45+</span>
            <p>Premium Styling - pompadour, combos</p>
           </div>
         </div>
        </section>
    );
}

export default Menu;