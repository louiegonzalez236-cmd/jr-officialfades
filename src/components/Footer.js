import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer-title">Jr.OfficialFades</h2>

            <p className="footer-text">
                Precision cuts, clean fades, and traditional grooming done right.
            </p>

            <div className="footer-info">
                <p>470 Hendee St, Elgin, IL</p>
                <p>(224) 713-7718</p>
                <p>Mon-Sat: 9am-7pm</p>
            </div>

            <p className="footer-copy">© 2026 Jr.OfficialFades. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
