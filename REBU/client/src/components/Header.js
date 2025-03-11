import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">Rebu 🚗</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#" className="btn-primary">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;