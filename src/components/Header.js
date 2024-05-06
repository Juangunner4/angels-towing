import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../images/Logo.svg';


function Header() {
    
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Angels Towing Logo" />
            </div>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/services" className="nav-link">Services</Link>
            </nav>
            <div className="phone-number"><a href="tel:+15402468095" className="call-us-button">Call Us Now!</a></div>
        </header>
    );
}

export default Header;
