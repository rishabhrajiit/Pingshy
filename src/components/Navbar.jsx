import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {
  FaSearch, FaUser, FaWallet,
  FaUserGraduate, FaPlus, FaFolderOpen
} from 'react-icons/fa';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo + Search */}
      <div className="navbar-left">
        <Link to="/" className="logo">MyApp</Link>
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input className="search-bar" placeholder="Search..." />
        </div>
      </div>

      {/* Right side: Buttons */}
      <div className="navbar-right">
        {/* When NOT logged in → only show login */}
        {!isLoggedIn ? (
          <Link to="/login" className="nav-button login">
            <FaUser /> Login
          </Link>
        ) : (
          <>
            {/* 🔓 Show full set of buttons */}
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

            <button onClick={handleLogout} className="nav-button login">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
