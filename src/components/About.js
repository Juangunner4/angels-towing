import React from 'react';
import "./About.css"

function About() {
  return (
    <div className="about-container">
      <div className='about'>
        <h1>About Us</h1>
        <h4>Welcome to Angels Towing</h4>
        <p>Founded in 2023, our towing company in Harrisonburg, VA stands as a beacon of reliability and service excellence. Committed to our community, we operate 24/7, ensuring assistance is just a call away, whenever you need it. At our core, we're more than just a towing service; we're your trusted partner, dedicated to providing prompt, professional help in any situation.</p>
      </div>
      <div className='location'>
        <h4>Located At</h4>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.6544808538213!2d-78.89599638428922!3d38.41936378065577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b47201227de3cf%3A0x1f77e49bc84377e9!2s3030%20S%20Main%20St%2C%20Harrisonburg%2C%20VA%2022801%2C%20USA!5e0!3m2!1sen!2s!4v1642710612579!5m2!1sen!2s"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="phone-number"><a href="tel:+15402568095" className="call-us-button-hero">Call Us Now!</a></div>
    </div>
  );
}

export default About;
