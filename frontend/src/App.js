import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import Navbar from './components/Navbar'; 
import Home  from './components/Home';
const App = () => {
  const [refresh, setRefresh] = useState(false);
  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define routes for login, create reservation, and all reservations */}
          
          <Route path="/create" element={<ReservationForm onSuccess={triggerRefresh} />} />
          <Route path="/all" element={<ReservationList key={refresh} />} />
        
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
