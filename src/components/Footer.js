import React from 'react';
import './Footer.css'; 
function Footer() {
    return (
        <div className="App-footer">
            <div className="footer-sections">
                <div className="footer-column">
                    <h4>Location</h4>
                    <p>123 Towing Lane</p>
                    <p>City, State, Zip</p>
                </div>
                <div className="footer-column">
                    <h4>Service Area</h4>
                    <p>Harrisonburg City and surrounding areas</p>
                </div>
            </div>
            <p>© 2024 Angels Towing. All rights reserved.</p>
        </div>
    );
}

export default Footer;
