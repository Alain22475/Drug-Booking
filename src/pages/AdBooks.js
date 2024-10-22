// src/pages/BookingsManagement.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdBooking.css';

const BookingsManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Mock bookings data
    setBookings([
      { id: 1, drug: 'Paracetamol', phone: '123456789' },
      { id: 2, drug: 'Ibuprofen', phone: '987654321' },
    ]);
  }, []);

  const filteredBookings = bookings.filter((booking) =>
    booking.phone.includes(searchQuery)
  );

  return (
    <div className="admin-dashboard-container">
      <header className="admin-logo-bar">
        <h1>Admin Dashboard</h1>
      </header>

      <div className="admin-main-content">
        <nav className="admin-sidebar">
          <ul>
            <li><Link to="/admin/drugs">Drug Management</Link></li>
            <li><Link to="/admin/clients">Client Management</Link></li>
            <li><Link to="/admin/bookings">Bookings Management</Link></li>
            <li><Link to="/admin/login">Logout</Link></li>
          </ul>
        </nav>

        <div className="admin-content bookings-management-container">
          <h2>Bookings Management</h2>
          <input
            type="text"
            placeholder="Search by phone number..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <table>
            <thead>
              <tr>
                <th>Drug</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.drug}</td>
                  <td>{booking.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsManagement;
