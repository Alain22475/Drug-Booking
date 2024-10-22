// src/pages/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdDashboard.css';

const AdminDashboard = () => {
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

        <div className="admin-content">
          <h2>Welcome to Admin Dashboard</h2>
          <p>Select an option from the sidebar to manage the system.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
