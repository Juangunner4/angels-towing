import React from 'react';
import './Hero.css';
import heroImage from '../images/Hero.svg';

function Hero() {
    return (
        <div className="hero">
            <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="hero-gradient"></div>
            <p className="hero-subtitle">Breakdowns or flat tires? No worries! At Angels Towing, we're always ready to help. From roadside assistance to lockout services, we deliver your car to any location, near or far—no questions asked. Offering the best prices in the valley, we treat every customer like family. Call us today and experience stress-free service! Se habla español.</p>
            <div className="phone-number"><a href="tel:+15402568095" className="call-us-button-hero">Call Us Now!</a></div>
        </div>
    );
}

export default Hero;
