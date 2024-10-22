// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CAuth from './pages/CAuth';
import CDashboard from './pages/CDashboard';
import CBooking from './pages/CBooking';
import CProfile from './pages/CProfile';
import AdAuth from './pages/AdAuth';
import AdDashboard from './pages/AdDashboard';
import AdDrug from './pages/AdDrug';
import AdClient from './pages/AdClient';
import AdBooks from './pages/AdBooks';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client/login" element={<CAuth />} />
        <Route path="/client/dashboard" element={<CDashboard />} />
        <Route path="/client/bookings" element={<CBooking />} />
        <Route path="/client/profile" element={<CProfile />} />
        <Route path="/client/home" element={<CDashboard />} />
        <Route path="/client/book/:drugId" element={<CBooking />} />
        <Route path="/admin/login" element={<AdAuth />} />
        <Route path="/admin/dashboard" element={<AdDashboard />} />
        <Route path="/admin/drugs" element={<AdDrug />} />
        <Route path="/admin/clients" element={<AdClient />} />
        <Route path="/admin/bookings" element={<AdBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
