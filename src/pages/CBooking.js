// src/pages/DrugBooking.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // Reuse Dashboard.css for layout consistency

const DrugBooking = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock search functionality
    const drugs = ['Paracetamol', 'Ibuprofen', 'Aspirin'];
    setResults(drugs.filter((drug) => drug.toLowerCase().includes(query.toLowerCase())));
  };

  const handleBook = (drug) => {
    console.log(`Booked: ${drug}`);
    alert(`You booked ${drug}`);
  };

  return (
    <div className="dashboard-container">
      <header className="logo-bar">
        <h1>Book a Drug</h1>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li><Link to="/client/home">Home</Link></li>
            <li><Link to="/client/bookings">Books</Link></li>
            <li><Link to="/client/profile">Profile</Link></li>
            <li><Link to="/client/login">Logout</Link></li> {/* Logout link to ClientAuth */}
          </ul>
        </nav>

        <div className="content">
          <h2>Search and Book a Drug</h2>
          <input
            type="text"
            placeholder="Search for a drug..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          <ul>
            {results.map((drug, index) => (
              <li key={index}>
                {drug} <button onClick={() => handleBook(drug)}>Book</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrugBooking;
