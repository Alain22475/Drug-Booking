// src/pages/ClientProfile.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // Reuse the same styles for consistency

const ClientProfile = () => {
  const [user, setUser] = useState({
    fullname: 'John Doe',
    phone: '123456789',
    email: 'john@example.com',
  });
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking history (mock data for now)
    setBookings(['Paracetamol', 'Ibuprofen']);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="logo-bar">
        <h1>Client Profile</h1>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li><Link to="/client/home">Home</Link></li>
            <li><Link to="/client/bookings">Books</Link></li>
            <li><Link to="/client/profile">Profile</Link></li>
            <li><Link to="/client/login">Logout</Link></li> {/* Updated to direct to ClientAuth */}
          </ul>
        </nav>

        <div className="content">
          <h2>My Profile</h2>
          <p><strong>Full Name:</strong> {user.fullname}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Email:</strong> {user.email}</p>

          <h3>Booking History</h3>
          <ul>
            {bookings.map((drug, index) => (
              <li key={index}>{drug}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
