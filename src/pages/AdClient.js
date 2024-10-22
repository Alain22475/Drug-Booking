// src/pages/ClientManagement.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdClient.css';

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Mock client data
    setClients([
      { id: 1, fullname: 'John Doe', phone: '123456789', email: 'john@example.com' },
      { id: 2, fullname: 'Jane Smith', phone: '987654321', email: 'jane@example.com' },
    ]);
  }, []);

  const handleDeleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const filteredClients = clients.filter((client) =>
    client.fullname.toLowerCase().includes(searchQuery.toLowerCase())
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

        <div className="admin-content client-management-container">
          <h2>Client Management</h2>
          <input
            type="text"
            placeholder="Search for a client..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id}>
                  <td>{client.fullname}</td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
                  <td>
                    <button onClick={() => handleDeleteClient(client.id)}>Delete</button>
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

export default ClientManagement;
