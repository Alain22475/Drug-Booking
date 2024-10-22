// src/pages/AdminAuth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdAuth.css';

const AdminAuth = () => {
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, password } = formData;

    // Dummy login logic (replace with real authentication logic)
    if (phone === 'admin' && password === 'admin123') {
      console.log('Admin Login Successful');
      navigate('/admin/dashboard'); // Redirect to admin dashboard
    } else {
      setError('Invalid phone or password');
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the LandingPage
  };

  return (
    <div className="auth-container">
      <button className="back-button" onClick={handleBack}>Back</button>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AdminAuth;
