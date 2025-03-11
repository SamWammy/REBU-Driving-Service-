import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2>Your Ride, Your Way</h2>
        <p>Experience seamless ride-sharing with Rebu. Built for riders, drivers, and admins.</p>
        <div className="cta-buttons">
          <a href="#" className="btn-primary">Download Rider App</a>
          <a href="#" className="btn-secondary">Become a Driver</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;