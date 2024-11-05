// src/pages/GatewaysPage.js
import React, { useState, useEffect } from 'react';
import GatewayList from '../components/GatewayList';
import { getReturns } from '../api/api'; // Import API call to fetch returns

const GatewaysPage = () => {
  const [returns, setReturns] = useState([]); // State for storing returns

  useEffect(() => {
    // Fetch returns when the component mounts
    const fetchReturns = async () => {
      try {
        const response = await getReturns();
        setReturns(response.data);
      } catch (error) {
        console.error('Error fetching returns:', error);
      }
    };

    fetchReturns();
  }, []);

  return (
    <div>
      <h2>Gateways</h2>
      <GatewayList />

      {/* Display the status of Returns */}
      <div className="mt-5">
        <h3>Current Status</h3>
        {returns.length > 0 ? (
          <ul className="list-group">
            {returns.map((ret) => (
              <li key={ret._id} className="list-group-item d-flex justify-content-between align-items-center">
                <span><strong> </strong> {ret.name}</span>
                <span
                  className={`badge ${
                    ret.status === 'available' ? 'bg-success' : 'bg-danger'
                  }`}
                >
                  {ret.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No returns available.</p>
        )}
      </div>
    </div>
  );
};

export default GatewaysPage;
