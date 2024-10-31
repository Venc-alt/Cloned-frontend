// src/components/ReservationForm.js
import React, { useState, useEffect } from 'react';
import { getGateways, reserveGateway } from '../api/api';

const ReservationForm = () => {
  const [gateways, setGateways] = useState([]);
  const [gatewayId, setGatewayId] = useState('');
  const [userId, setUserId] = useState(''); // You may want to dynamically set this based on logged-in user
  const [timeSlot, setTimeSlot] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch available gateways on component mount
    const fetchGateways = async () => {
      try {
        const response = await getGateways();
        setGateways(response.data);
      } catch (error) {
        console.error('Error fetching gateways:', error);
      }
    };
    fetchGateways();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationData = { gatewayId, userId, timeSlot };
      await reserveGateway(reservationData);
      setMessage('Reservation successful!');
      // Clear the form fields after successful submission
      setGatewayId('');
      setUserId('');
      setTimeSlot('');
    } catch (error) {
      setMessage('Failed to reserve the gateway. Please try again.');
      console.error('Error reserving gateway:', error);
    }
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gateway:</label>
          <select value={gatewayId} onChange={(e) => setGatewayId(e.target.value)} required>
            <option value="">Select a gateway</option>
            {gateways.map((gateway) => (
              <option key={gateway._id} value={gateway._id}>
                {gateway.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter user ID"
            required
          />
        </div>
        <div>
          <label>Time Slot:</label>
          <input
            type="text"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            placeholder="e.g., 10:00 AM - 11:00 AM"
            required
          />
        </div>
        <button type="submit">Reserve Gateway</button>
      </form>
    </div>
  );
};

export default ReservationForm;
