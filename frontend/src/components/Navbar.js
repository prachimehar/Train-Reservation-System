import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-gray-200  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo} // 🔁 Replace with your logo path
              alt="Train Logo"
              className="h-10 w-10 mr-3"
            />
            <span className="text-xl font-bold tracking-wide">Train Reservation</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link 
                to="/" className="hover:bg-gray-300  px-3 py-2 rounded-md font-medium transition"
                >
                Home
            </Link>
    
            <Link
              to="/create"
              className="hover:bg-gray-300  px-3 py-2 rounded-md font-medium transition"
            >
              Create Reservation
            </Link>
            <Link
              to="/all"
              className="hover:bg-gray-300  px-3 py-2 rounded-md font-medium transition"
            >
              All Reservations
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
