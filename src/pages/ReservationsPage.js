// src/pages/ReservationsPage.js
import React, { useState, useEffect } from 'react';
import ReservationForm from '../components/ReservationForm';
import { getReservations } from '../api/api';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reservations on component mount
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
    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Reservations Page</h2>
      <ReservationForm />

      <h3>Existing Reservations</h3>
      {loading ? (
        <p>Loading reservations...</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation._id}>
              Gateway: {reservation.gatewayId.name} - User ID: {reservation.userId} - Time Slot: {reservation.timeSlot}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationsPage;
