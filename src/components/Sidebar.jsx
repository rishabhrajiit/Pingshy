import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaFire, FaCompass, FaTags, FaLifeRing, FaChevronDown, FaPlus
} from 'react-icons/fa';

// Sample communities data — replace or load dynamically as needed
const joinedCommunities = [
  {
    id: 'developersIndia',
    name: 'r/developersIndia',
    icon: 'https://styles.redditmedia.com/t5_33crr/styles/communityIcon_developersIndia.png',
    to: '/r/developersIndia',
  },
  {
    id: 'KitchenConfidential',
    name: 'r/KitchenConfidential',
    icon: 'https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_cook.png',
    to: '/r/KitchenConfidential',
  },
  {
    id: 'travel',
    name: 'r/travel',
    icon: 'https://styles.redditmedia.com/t5_2qh7y/styles/communityIcon_travel.png',
    to: '/r/travel',
  },
  {
    id: 'UPSC',
    name: 'r/UPSC',
    icon: 'https://styles.redditmedia.com/t5_32qzv/styles/communityIcon_upsc.png',
    to: '/r/UPSC',
  },
];

const Sidebar = () => {
  const [communitiesOpen, setCommunitiesOpen] = useState(true);

  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebar-item" end>
        <FaHome /> Home
      </NavLink>
      <NavLink to="/popular" className="sidebar-item">
        <FaFire /> Popular
      </NavLink>
      <NavLink to="/explore" className="sidebar-item">
        <FaCompass /> Explore
      </NavLink>
      <div className="sidebar-item"><FaTags /> All Topics</div>
      <div className="sidebar-section">
        <div
          className="sidebar-section-header"
          onClick={() => setCommunitiesOpen(prev => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setCommunitiesOpen(prev => !prev);
            }
          }}
        >
          <span className="sidebar-section-title">COMMUNITIES</span>
          <FaChevronDown className={`sidebar-chevron ${communitiesOpen ? 'open' : ''}`} />
        </div>

        {communitiesOpen && (
          <div className="sidebar-communities-list">
            <NavLink to="/create-community" className="sidebar-create-community">
              <FaPlus size={13} style={{ marginRight: 7 }} />
              Create Community
            </NavLink>

            {joinedCommunities.map(c => (
              <NavLink
                to={c.to}
                key={c.id}
                className="sidebar-community-item"
                activeClassName="active"
              >
                <img src={c.icon} alt={c.name} className="sidebar-community-icon" />
                <span className="sidebar-community-name">{c.name}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
      <div className="sidebar-item"><FaLifeRing /> Help</div>
    </div>
  );
};

export default Sidebar;
