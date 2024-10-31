import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GatewaysPage from './pages/GatewaysPage';
import ReservationsPage from './pages/ReservationsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gateways" element={<GatewaysPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
