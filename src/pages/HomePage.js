// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center p-5 rounded mb-4">
        <h1>Welcome to the Gateway Reservation System</h1>
        <p className="lead">Effortlessly manage and reserve your preferred gateways</p>
        <Link to="/register" className="btn btn-light btn-lg mt-3 me-3">
          Get Started
        </Link>
        <Link to="/reservations" className="btn btn-outline-light btn-lg mt-3">
          View Reservations
        </Link>
      </div>

      {/* Features Section */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card p-4 shadow-sm">
            <h3>Easy Reservations</h3>
            <p>Reserve a gateway with just a few clicks, from anywhere, at any time.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 shadow-sm">
            <h3>Real-Time Availability</h3>
            <p>Check the real-time status of each gateway and avoid double bookings.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card p-4 shadow-sm">
            <h3>Secure Access</h3>
            <p>Your data is secure with us, ensuring privacy and reliability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
