import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    console.log("Register invoked");
    // Aqui você poderá futuramente fazer o POST para o backend
  };

  return (
    <div className="register-page container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      
      <div className="mb-4">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          id="firstName"
          type="text"
          className="form-control"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          id="lastName"
          type="text"
          className="form-control"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary w-100 mb-3"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
