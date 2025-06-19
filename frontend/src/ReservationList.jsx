import React, { useEffect, useState } from "react";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch((err) => console.error("Error fetching reservations:", err));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Passenger Name</th>
            <th className="px-4 py-2 border">Source</th>
            <th className="px-4 py-2 border">Destination</th>
            <th className="px-4 py-2 border">Date of Journey</th>
            <th className="px-4 py-2 border">Train Number</th>
            <th className="px-4 py-2 border">Seat Number</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id} className="text-center">
              <td className="px-4 py-2 border">{res.id}</td>
              <td className="px-4 py-2 border">{res.passengerName}</td>
              <td className="px-4 py-2 border">{res.source}</td>
              <td className="px-4 py-2 border">{res.destination}</td>
              <td className="px-4 py-2 border">{res.dateOfJourney}</td>
              <td className="px-4 py-2 border">{res.trainNumber}</td>
              <td className="px-4 py-2 border">{res.seatNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
