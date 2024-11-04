import React, { useState, useEffect } from "react";
import ReservationForm from "../components/ReservationForm";
import { getReservations, cancelReservation, getReturns } from "../api/api";

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const [returns, setReturns] = useState([]); // New state for returns
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReservations();
    fetchReturns(); // Fetch returns when the component mounts
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await getReservations();
      setReservations(response.data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReturns = async () => {
    try {
      const response = await getReturns();
      setReturns(response.data);
    } catch (error) {
      console.error("Error fetching returns:", error);
    }
  };

  const handleCancel = async (reservationId) => {
    try {
      await cancelReservation(reservationId);
      fetchReservations(); // Refresh reservations after a successful cancel
    } catch (error) {
      console.error("Error canceling reservation:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="mb-5 p-4 bg-light rounded shadow-sm">
        <h2 className="text-center text-primary mb-3">
          Manage Your Reservations
        </h2>
        <ReservationForm returns={returns} />{" "}
        {/* Pass the returns data to ReservationForm */}
      </div>

      <div className="reservation-list-section">
        <h3 className="text-center text-secondary mb-4">
          Current Reservations
        </h3>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : reservations.length > 0 ? (
          <div className="row">
            {reservations.map((reservation) => (
              <div key={reservation._id} className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>Gateway:</strong>{" "}
                      {reservation.gatewayId?.name || "N/A"}
                    </h5>
                    <p className="card-text">
                      <strong>User:</strong> {reservation.userId?.name || "N/A"}{" "}
                      <br />
                      <strong>Date:</strong> {reservation.date || "N/A"} <br />
                      <strong>Time Slot:</strong>{" "}
                      {reservation.startTime && reservation.endTime
                        ? `${reservation.startTime} - ${reservation.endTime}`
                        : "N/A"}{" "}
                      <br />
                      <strong>Returns:</strong>
                      {reservation.returns && reservation.returns.length > 0
                        ? reservation.returns
                            .map((ret) => (ret.name ? ret.name : "Unnamed"))
                            .join(", ")
                        : "N/A"}
                    </p>
                    <button
                      className="btn btn-outline-danger btn-sm w-100"
                      onClick={() => handleCancel(reservation._id)}
                    >
                      Cancel Reservation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">No reservations found.</p>
        )}
      </div>
    </div>
  );
};

export default ReservationsPage;
