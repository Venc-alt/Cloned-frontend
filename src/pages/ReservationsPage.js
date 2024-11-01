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
      // Refresh the reservations after a successful cancel
      fetchReservations();
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Reservations Page</h2>
      <ReservationForm />

      <h3 className="text-center mb-3">Existing Reservations</h3>
      {loading ? (
        <p className="text-center">Loading reservations...</p>
      ) : (
        <ul className="list-group">
          {reservations.map((reservation) => (
            <li key={reservation._id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>Gateway:</strong> {reservation.gatewayId?.name || 'N/A'} <br />
                <strong>User:</strong> {reservation.userId?.name || 'N/A'} <br />
                <strong>Time Slot:</strong> {reservation.timeSlot || 'N/A'}
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
