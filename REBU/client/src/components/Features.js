import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Features ✨</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Rider App</h3>
            <ul>
              <li>Request rides with real-time tracking</li>
              <li>Estimate fare and view trip history</li>
              <li>Multiple payment options</li>
              <li>Rate and review drivers</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Driver App</h3>
            <ul>
              <li>Accept or decline ride requests</li>
              <li>Navigate with integrated maps</li>
              <li>Track earnings and ride history</li>
              <li>Receive ratings and feedback</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Admin Panel</h3>
            <ul>
              <li>Manage riders, drivers, and rides</li>
              <li>Monitor platform performance</li>
              <li>Handle support requests and disputes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;