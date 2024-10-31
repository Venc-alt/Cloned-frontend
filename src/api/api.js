import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const getGateways = () => api.get('/gateways');
export const reserveGateway = (reservationData) => api.post('/reservations', reservationData);
export const getReservations = () => api.get('/reservations'); // Ensure this is present

export default api;
