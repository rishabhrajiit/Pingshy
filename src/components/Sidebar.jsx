import React from 'react';
import './Sidebar.css';
import { FaHome, FaFire, FaCompass, FaUsers, FaLifeRing, FaTags } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item"><FaHome /> Home</div>
      <div className="sidebar-item"><FaFire /> Popular</div>
      <div className="sidebar-item"><FaCompass /> Explore</div>
      <div className="sidebar-item"><FaUsers /> Communities</div>
      <div className="sidebar-item"><FaTags /> All Topics</div>
      <div className="sidebar-item"><FaLifeRing /> Help</div>
    </div>
  );
};

export default Sidebar;
