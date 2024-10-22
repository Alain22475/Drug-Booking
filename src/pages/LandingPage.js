// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h3>Welcome to Medical Drug Booking System</h3>
      <p>Fast, easy, and secure booking of medical drugs. Manage your drugs and bookings efficiently.</p>
      <div className="button-container">
        <Link to="/client/login" className="btn">Client Portal</Link>
        <Link to="/admin/login" className="btn">Admin Portal</Link>
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Medical Drug Booking System. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
