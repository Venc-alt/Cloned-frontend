import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="container mt-5">
      {/* Carousel Section */}
      <div id="homepageCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-section text-white p-5 d-flex flex-column align-items-center justify-content-center text-center"
              style={{ backgroundImage: 'url(/images/Tech_Background.jpg)', backgroundSize: 'cover', height: '60vh', backgroundPosition: 'center' }}>
              <h1 className="display-4 fw-bold mb-3">Welcome, Tech Team</h1>
              <p className="lead mb-4">Simplify your work with seamless gateway management and reservations.</p>
              <div className="d-flex gap-3">
                <Link to="/reservations" className="btn btn-warning btn-lg shadow-sm">View Reservations</Link>
                <Link to="/register" className="btn btn-outline-light btn-lg shadow-sm">Register New Account</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="hero-section text-white p-5 d-flex flex-column align-items-center justify-content-center text-center"
              style={{ backgroundImage: 'url(/images/Tech_Background.jpg)', backgroundSize: 'cover', height: '60vh', backgroundPosition: 'center' }}>
              <h1 className="display-4 fw-bold mb-3">Fast and Efficient</h1>
              <p className="lead mb-4">Quickly book gateways with our intuitive and efficient reservation system.</p>
              <Link to="/reservations" className="btn btn-warning btn-lg shadow-sm">Get Started</Link>
            </div>
          </div>
          <div className="carousel-item">
            <div className="hero-section text-white p-5 d-flex flex-column align-items-center justify-content-center text-center"
              style={{ backgroundImage: 'url(/images/Tech_Background.jpg)', backgroundSize: 'cover', height: '60vh', backgroundPosition: 'center' }}>
              <h1 className="display-4 fw-bold mb-3">Reliable & Secure</h1>
              <p className="lead mb-4">Ensure a secure environment for managing and accessing gateways.</p>
              <Link to="/register" className="btn btn-outline-light btn-lg shadow-sm">Join Us</Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homepageCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homepageCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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
