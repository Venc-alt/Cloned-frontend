// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center p-5 rounded mb-4">
        <h1>Welcome, Technical Team</h1>
        <p className="lead">Easily manage and reserve gateways for your work needs.</p>
        <Link to="/reservations" className="btn btn-light btn-lg mt-3 me-3">
          View Reservations
        </Link>
        <Link to="/register" className="btn btn-outline-light btn-lg mt-3">
          Register New Account
        </Link>
      </div>

      {/* Key Features Section */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card p-4 shadow-sm">
            <h4>Quick Reservations</h4>
            <p>Reserve a gateway with just a few clicks.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 shadow-sm">
            <h4>Real-Time Status</h4>
            <p>See which gateways are available right now.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 shadow-sm">
            <h4>Secure Access</h4>
            <p>Only authorized techs have access to reservations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
