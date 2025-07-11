import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const name = sessionStorage.getItem('name');
    if (name) setUserName(name);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">GiftLink</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/app">Gifts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app/search">Search</Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {userName ? (
            <>
              <li className="nav-item">
                <span className="navbar-text me-3">Welcome, <strong>{userName}</strong></span>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
