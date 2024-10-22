// src/pages/ClientDashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import paracetamolImage from '../images/pctml.jpg'; // Adjust according to your structure
import ibuprofenImage from '../images/ibupr.jpg'; // Adjust according to your structure

const ClientDashboard = () => {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    // Fetch drugs from API (mock data for now)
    const mockDrugs = [
      {
        id: 1,
        name: 'Paracetamol',
        dose: '500mg',
        price: '$10',
        image: paracetamolImage, // Replace with actual image path
      },
      {
        id: 2,
        name: 'Ibuprofen',
        dose: '250mg',
        price: '$8',
        image: ibuprofenImage, // Replace with actual image path
      },
    ];
    setDrugs(mockDrugs);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="logo-bar">
        <h1>Client Dashboard</h1>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li><Link to="/client/home">Home</Link></li>
            <li><Link to="/client/bookings">Books</Link></li>
            <li><Link to="/client/profile">Profile</Link></li>
            <li><Link to="/client/login">Logout</Link></li>
          </ul>
        </nav>

        <div className="content">
          <h2>Available Drugs</h2>
          <div className="drugs-list">
            {drugs.map((drug) => (
              <div key={drug.id} className="drug-card">
                <img src={drug.image} alt={drug.name} className="drug-image" />
                <h3 className="drug-name">{drug.name}</h3>
                <p className="drug-dose">{drug.dose}</p>
                <p className="drug-price">{drug.price}</p>
                <Link to={`/client/book/${drug.id}`} className="book-button">Book</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
