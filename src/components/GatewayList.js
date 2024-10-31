// src/components/GatewayList.js
import React, { useState, useEffect } from 'react';
import { getGateways } from '../api/api';

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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Gateway List</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row">
          {gateways.map((gateway) => (
            <div key={gateway._id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{gateway.name}</h5>
                  <p className="card-text">
                    Status:{" "}
                    <span
                      className={`badge ${
                        gateway.status === 'available' ? 'bg-success' : 'bg-danger'
                      }`}
                    >
                      {gateway.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GatewayList;
