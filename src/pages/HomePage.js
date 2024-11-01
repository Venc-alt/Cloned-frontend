
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="hero-section text-white p-5 rounded shadow" style={{ backgroundImage: 'url(/images/Leonardo_Phoenix.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay d-flex flex-column align-items-center justify-content-center text-center p-4">
          <h1 className="display-4 fw-bold mb-3">Welcome, Tech Team</h1>
          <p className="lead mb-4">Simplify your work with seamless gateway management and reservations.</p>
          <div className="d-flex gap-3">
            <Link to="/reservations" className="btn btn-warning btn-lg shadow-sm">View Reservations</Link>
            <Link to="/register" className="btn btn-outline-light btn-lg shadow-sm">Register New Account</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section my-5">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="feature-card bg-light p-4 text-center rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3">Fast Reservations</h4>
              <p>Make quick reservations with an intuitive interface designed for efficiency.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card bg-light p-4 text-center rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3">Real-Time Status</h4>
              <p>Check the current availability of all gateways in one place to avoid double bookings.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card bg-light p-4 text-center rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3">Secure and Reliable</h4>
              <p>Only authorized tech team members can access and manage reservations for security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
