
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css'; // Add a CSS file for custom styling if needed

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-lg">
      <div className="container">
        <Link className="navbar-brand fs-2 fw-bold" to="/">Gateway Reservation</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/gateways">Gateways</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/reservations">Reservations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




