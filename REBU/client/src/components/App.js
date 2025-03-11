import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Usage from './components/Usage';
import Footer from './components/Footer';
import RiderApp from './components/RiderApp';
import DriverApp from './components/DriverApp';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <Usage />
      <RiderApp />
      <DriverApp />
      <Footer />
    </div>
  );
};

export default App;