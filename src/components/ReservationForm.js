import React, { useState, useEffect } from 'react';
import { getGateways, getReturns, reserveGateway } from '../api/api';

const ReservationForm = () => {
  const [gateways, setGateways] = useState([]);
  const [returns, setReturns] = useState([]);
  const [gatewayId, setGatewayId] = useState('');
  const [selectedReturns, setSelectedReturns] = useState([]);
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gatewaysResponse = await getGateways();
        setGateways(gatewaysResponse.data);
        const returnsResponse = await getReturns();
        setReturns(returnsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Selected Returns:', selectedReturns); // Debug log

    // Ensure selectedReturns is an array of objects with detailed data (if needed)
    const detailedReturns = selectedReturns.map((returnId) => {
      const returnItem = returns.find((item) => item._id === returnId);
      return returnItem ? { _id: returnItem._id, name: returnItem.name } : null;
    }).filter(Boolean);

    try {
      const reservationData = {
        gatewayId,
        returnIds: detailedReturns, // Include detailed return items
        userId,
        date,
        startTime,
        endTime,
      };
      console.log('Submitting reservation:', reservationData);
      await reserveGateway(reservationData);
      setMessage('Reservation successful!');
      setGatewayId('');
      setSelectedReturns([]);
      setUserId('');
      setDate('');
      setStartTime('');
      setEndTime('');
    } catch (error) {
      setMessage('Failed to reserve. Please try again.');
      console.error('Error reserving:', error);
    }
  };

  const handleReturnsChange = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedReturns(selected);
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
          <label className="form-label">Select Returns (multiple):</label>
          <select
            multiple
            className="form-select"
            value={selectedReturns}
            onChange={handleReturnsChange}
          >
            {returns.map((returnItem) => (
              <option key={returnItem._id} value={returnItem._id}>
                {returnItem.name}
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
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Start Time:</label>
          <input
            type="time"
            className="form-control"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Time:</label>
          <input
            type="time"
            className="form-control"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
