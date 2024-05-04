import React from 'react';
import './Services.css';
import TowTruck from '../images/TowTruck.gif';
import Lockout from '../images/Lockout.gif';
import Gas from '../images/Gas.gif'
import Tire from '../images/Tire.gif'
import Battery from '../images/Battery.gif'

function Services() {
  return (
    <div className='services-container'>
      <div className='service-section'>
      <img src={TowTruck} alt="Towing GIF" className="gif-image" />
        <h2>Towing</h2>
        <p>24/7 towing service for vehicles of all sizes.</p>
      </div>
      <div className='service-section'>
      <img src={Lockout} alt="TLockout GIF" className="gif-image" />
        <h2>Lockout</h2>
        <p>Emergency lockout assistance to help you regain access to your vehicle.</p>
      </div>
      <div className='service-section'>
      <img src={Gas} alt="Gas GIF" className="gif-image" />
        <h2>Gas Delivery</h2>
        <p>Delivery of gasoline to your location in case you run out of fuel.</p>
      </div>
      <div className='service-section'>
        <img src={Tire} alt='Tire Gif' className='gif-image'/>
        <h2>Flat Tire Change</h2>
        <p>Professional tire changing services to get you back on the road quickly.</p>
      </div>
      <div className='service-section'>
      <img src={Battery} alt='Battery Gif' className='gif-image'/>
        <h2>Battery Services</h2>
        <p>Battery jump-start and replacement services for vehicles with battery issues.</p>
      </div>
      <div className="phone-number">
        <a href="tel:+15402568095" className="call-us-button-hero">Call Us Now!</a>
      </div>
    </div>
  );
}

export default Services;
