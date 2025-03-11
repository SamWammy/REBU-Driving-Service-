import React from 'react';

const Usage = () => {
  return (
    <section id="usage" className="usage">
      <div className="container">
        <h2>Usage</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <h3>Riders</h3>
            <p>Sign up, request a ride, and enjoy a seamless experience.</p>
          </div>
          <div className="usage-card">
            <h3>Drivers</h3>
            <p>Register as a driver, accept ride requests, and start earning.</p>
          </div>
          <div className="usage-card">
            <h3>Admins</h3>
            <p>Manage the platform through the admin panel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;