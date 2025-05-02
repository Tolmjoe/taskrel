import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">

                <div className="footer-logo">
                    <h2 className="foottext">OAKRIGS VEHICLES</h2>
                    <p>Driven by speed, powered by fuel.</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Ride. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
