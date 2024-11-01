// src/components/ReservationForm.js
import React, { useState, useEffect } from 'react';
import { getGateways, reserveGateway } from '../api/api';

const ReservationForm = () => {
  const [gateways, setGateways] = useState([]);
  const [gatewayId, setGatewayId] = useState('');
  const [userId, setUserId] = useState(''); // You may want to dynamically set this based on logged-in user
  const [timeSlot, setTimeSlot] = useState(''); // Single input for manual time entry
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
      setGatewayId('');
      setUserId('');
      setTimeSlot('');
    } catch (error) {
      setMessage('Failed to reserve the gateway. Please try again.');
      console.error('Error reserving gateway:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Reservation Form</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Gateway:</label>
          <select
            className="form-select"
            value={gatewayId}
            onChange={(e) => setGatewayId(e.target.value)}
            required
          >
            <option value="">Select a gateway</option>
            {gateways.map((gateway) => (
              <option key={gateway._id} value={gateway._id}>
                {gateway.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">User ID:</label>
          <input
            type="text"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter user ID"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Time Slot:</label>
          <input
            type="text"
            className="form-control"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            placeholder="e.g., 10:00 AM - 11:00 AM"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Reserve Gateway</button>
      </form>
    </div>
  );
};

export default ReservationForm;
