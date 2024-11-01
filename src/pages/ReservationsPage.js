// src/pages/ReservationsPage.js
import React, { useState, useEffect } from 'react';
import ReservationForm from '../components/ReservationForm';
import { getReservations, cancelReservation } from '../api/api';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const response = await getReservations();
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (reservationId) => {
    try {
      await cancelReservation(reservationId);
      setReservations(reservations.filter(reservation => reservation._id !== reservationId));
    } catch (error) {
      console.error('Error cancelling reservation:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Reservations Page</h2>

      <div className="mb-5">
        <ReservationForm />
      </div>

      <h3 className="text-center mb-3">Existing Reservations</h3>
      {loading ? (
        <p className="text-center">Loading reservations...</p>
      ) : (
        <ul className="list-group">
          {reservations.map((reservation) => (
            <li key={reservation._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>Gateway:</strong> {reservation.gatewayId.name} <br />
                <strong>User ID:</strong> {reservation.userId} <br />
                <strong>Time Slot:</strong> {reservation.timeSlot}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleCancel(reservation._id)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationsPage;
