import React, { useState } from 'react';
import { createReservation } from '../services/ReservationService';

const ReservationForm = ({ onSuccess }) => {
  const [reservation, setReservation] = useState({
    passengerName: '',
    source: '',
    destination: '',
    dateOfJourney: '',
    trainNumber: '',
    seatNumber: ''
  });

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReservation(reservation);
      alert("Reservation Created!");
      setReservation({
        passengerName: '',
        source: '',
        destination: '',
        dateOfJourney: '',
        trainNumber: '',
        seatNumber: ''
      });
      onSuccess(); // refresh list
    } catch (error) {
      alert("Error creating reservation");
    }
  };

  return (
   

    <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-2xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Reservation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="passengerName"
          placeholder="Passenger Name"
          value={reservation.passengerName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="source"
          placeholder="Source"
          value={reservation.source}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={reservation.destination}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="date"
          name="dateOfJourney"
          value={reservation.dateOfJourney}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="trainNumber"
          placeholder="Train Number"
          value={reservation.trainNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          name="seatNumber"
          placeholder="Seat Number"
          value={reservation.seatNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default ReservationForm;
