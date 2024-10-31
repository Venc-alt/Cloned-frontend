// src/components/GatewayList.js
import React, { useState, useEffect } from 'react';
import { getGateways } from '../api';

const GatewayList = () => {
  const [gateways, setGateways] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch gateways on component mount
    const fetchGateways = async () => {
      try {
        const response = await getGateways();
        setGateways(response.data);
      } catch (error) {
        console.error('Error fetching gateways:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGateways();
  }, []);

  return (
    <div>
      <h2>Gateway List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {gateways.map((gateway) => (
            <li key={gateway._id}>
              {gateway.name} - Status: {gateway.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GatewayList;
