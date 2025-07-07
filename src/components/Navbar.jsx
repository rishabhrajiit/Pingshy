import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Icons
import {
  FaSearch,
  FaWallet,
  FaUserGraduate,
  FaUser,
  FaPlus,
  FaFolderOpen
} from 'react-icons/fa';

const Navbar = () => {
  // Dummy login state (replace with real auth logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Left Side: Logo + Search */}
        <div className="navbar-left">
          <Link to="/" className="logo">MyApp</Link>

          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="navbar-right">
          {!isLoggedIn ? (
            // Before login: only login button
            <Link to="/login" className="nav-button login">
              <FaUser /> Login
            </Link>
          ) : (
            // After login: all buttons except login
            <>
              <Link to="/wallet" className="nav-button wallet">
                <FaWallet /> Wallet
              </Link>

              <Link to="/courses" className="nav-button secondary">
                <FaUserGraduate /> Courses
              </Link>

              <Link to="/create-post" className="nav-button orange">
                <FaPlus /> Create Post
              </Link>

              <Link to="/projects" className="nav-button grey">
                <FaFolderOpen /> Projects
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* 🔁 For Testing: Toggle login button (remove in real app) */}
      <div style={{ textAlign: 'center', marginTop: '12px' }}>
        <button onClick={() => setIsLoggedIn(prev => !prev)}>
          {isLoggedIn ? 'Logout' : 'Simulate Login'}
        </button>
      </div>
    </>
  );
};

export default Navbar;
