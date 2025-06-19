// src/services/ReservationService.js
import axios from 'axios';

const BASE_URL = "http://localhost:8080/reservations";

export const createReservation = (reservation) => {
  return axios.post(BASE_URL, reservation);
};

export const getAllReservations = () => {
  return axios.get(BASE_URL);
};

export const deleteReservation = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
