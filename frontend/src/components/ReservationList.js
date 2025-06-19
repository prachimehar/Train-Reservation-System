import React, { useEffect, useState } from 'react';
import { getAllReservations, deleteReservation } from '../services/ReservationService';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    const response = await getAllReservations();
    setReservations(response.data);
  };

  const handleDelete = async (id) => {
    await deleteReservation(id);
    fetchReservations();
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    

    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">All Reservations</h2>

      {reservations.length === 0 ? (
        <p className="text-center text-gray-500">No reservations found.</p>
      ) : (
        <ul className="space-y-4">
          {reservations.map((res) => (
            <li
              key={res.id}
              className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{res.passengerName}</h3>
                <p className="text-sm text-gray-600">
                  From <span className="font-medium">{res.source}</span> to <span className="font-medium">{res.destination}</span>
                </p>
                <p className="text-sm text-gray-500">Date: {res.dateOfJourney}</p>
                <p className="text-sm text-gray-500">Train No: {res.trainNumber}, Seat: {res.seatNumber}</p>
              </div>
              <button
                onClick={() => handleDelete(res.id)}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  
  );
};

export default ReservationList;
