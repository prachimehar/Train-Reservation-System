// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Train from "../assets/train.webp"; // 🔁 Replace with your train image path

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
         
         <div className="flex justify-center mb-10">
        <img
          src={Train} // 🔁 Replace with your train image path
          alt="Train"
          className="ml-6 mt-6 rounded-xl shadow-lg w-full max-w-2xl object-cover max-h-80 transition duration-300 ease-in-out hover:scale-105"
        />

      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Train Tickets Effortlessly</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-2xl">
          Welcome to TrainReservation – a simple and secure platform to reserve your seats, check availability, and manage your train journeys online.
        </p>
        <div className="flex flex-wrap gap-4 ">
          <Link to="/create" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            🎫 Create Reservation
          </Link>
          <Link to="/all" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            📋 View All Reservations
          </Link>
        </div>
        
      </header>
      </div>
      
        
{/* Features Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12 ">Why Choose Us</h2>
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Feature 1 */}
      <div className="bg-white shadow-lg rounded-xl p-8 transition transform hover:-translate-y-2 hover:shadow-xl border-t-4 border-blue-600">
        <div className="text-blue-600 mb-4 text-4xl">
          🚆
        </div>
        <h3 className="text-2xl font-semibold mb-3">Easy Booking</h3>
        <p className="text-gray-600">Reserve your train seats in just a few clicks with our user-friendly interface.</p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white shadow-lg rounded-xl p-8 transition transform hover:-translate-y-2 hover:shadow-xl border-t-4 border-green-600">
        <div className="text-green-600 mb-4 text-4xl">
          ⏱️
        </div>
        <h3 className="text-2xl font-semibold mb-3">Real-Time Updates</h3>
        <p className="text-gray-600">Stay updated with train schedules and journey details anytime.</p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white shadow-lg rounded-xl p-8 transition transform hover:-translate-y-2 hover:shadow-xl border-t-4 border-purple-600">
        <div className="text-purple-600 mb-4 text-4xl">
          🔒
        </div>
        <h3 className="text-2xl font-semibold mb-3">Secure Management</h3>
        <p className="text-gray-600">View and manage all your reservations securely in one place.</p>
      </div>

    </div>
  </div>
</section>
<section className="bg-gray-200  py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Journey?</h2>
        <p className="mb-6 text-lg">Start reserving your seat today with just a few clicks.</p>
        <Link
          to="/create"
          className="bg-blue-600 text-white px-6 py-3 font-semibold rounded shadow hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© {new Date().getFullYear()} TrainReservation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
