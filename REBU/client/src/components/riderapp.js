import React, { useState } from 'react';

const RiderApp = () => {
  const [rideRequested, setRideRequested] = useState(false);
  const [driverResponse, setDriverResponse] = useState('');

  const requestRide = () => {
    setRideRequested(true);
    // Send ride request to the server
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'rideRequest', user: 'rider' }));
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setDriverResponse(data.message);
    };
  };

  return (
    <div>
      <h1>Rider App</h1>
      {!rideRequested ? (
        <button onClick={requestRide}>Request Ride</button>
      ) : (
        <p>Waiting for driver response...</p>
      )}
      {driverResponse && <p>Driver: {driverResponse}</p>}
    </div>
  );
};

export default RiderApp;