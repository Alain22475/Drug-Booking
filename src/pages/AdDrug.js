// src/pages/DrugManagement.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdDrug.css';

const DrugManagement = () => {
  const [drugs, setDrugs] = useState([]);
  const [formData, setFormData] = useState({ name: '', dose: '', price: '', image: null });
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleAddDrug = () => {
    const newDrug = { ...formData, id: Date.now() };
    setDrugs([...drugs, newDrug]);
    setFormData({ name: '', dose: '', price: '', image: null });
  };

  const handleDeleteDrug = (id) => {
    setDrugs(drugs.filter((drug) => drug.id !== id));
  };

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchQuery.toLowerCase())
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

        <div className="admin-content drug-management-container">
          <h2>Drug Management</h2>
          <input
            type="text"
            placeholder="Search for a drug..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="drug-form">
            <input type="text" name="name" placeholder="Drug Name" onChange={handleInputChange} />
            <input type="text" name="dose" placeholder="Dose" onChange={handleInputChange} />
            <input type="text" name="price" placeholder="Price" onChange={handleInputChange} />
            <input type="file" name="image" onChange={handleInputChange} />
            <button onClick={handleAddDrug}>Add Drug</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Dose</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDrugs.map((drug) => (
                <tr key={drug.id}>
                  <td><img src={URL.createObjectURL(drug.image)} alt={drug.name} style={{ width: '50px', height: '50px' }} /></td>
                  <td>{drug.name}</td>
                  <td>{drug.dose}</td>
                  <td>{drug.price}</td>
                  <td>
                    <button onClick={() => handleDeleteDrug(drug.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DrugManagement;
