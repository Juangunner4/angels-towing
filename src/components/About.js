import React from 'react';
import "./About.css"

function About() {
  return (
    <div className="about-container">
      <div className='about'><h1>About Us</h1><p>This is the About page for Angels Towing.</p></div>
      <div className="phone-number"><a href="tel:+15402568095" className="call-us-button-hero">Call Us Now!</a></div>
    </div>
  );
}

export default About;
