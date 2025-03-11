import React, { useState, useEffect } from 'react';

const DriverApp = () => {
  const [rideRequest, setRideRequest] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'rideRequest') {
        setRideRequest(data);
      }
    };
  }, []);

  const handleResponse = (response) => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'rideResponse', message: response }));
    };
    setRideRequest(null);
  };

  return (
    <div>
      <h1>Driver App</h1>
      {rideRequest ? (
        <div>
          <p>New ride request!</p>
          <button onClick={() => handleResponse('Accepted')}>Accept</button>
          <button onClick={() => handleResponse('Declined')}>Decline</button>
        </div>
      ) : (
        <p>No ride requests at the moment.</p>
      )}
    </div>
  );
};

export default DriverApp;