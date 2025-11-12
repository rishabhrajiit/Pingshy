import React, { useState } from 'react';
import communityPic from "../../public/community.svg";
const SubredditJoinButton = () => {
  const [joined, setJoined] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleClick = () => {
    if (!joined) {
      setShowPrompt(true); // Show modal before joining
    } else {
      setJoined(false); // Toggle off if already joined
    }
  };

  const handleGotIt = () => {
    setJoined(true);
    setShowPrompt(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: joined ? '#e4e4e4' : '#0079d3',
          color: joined ? '#1c1c1c' : '#fff',
          border: 'none',
          borderRadius: 24,
          padding: '8px 24px',
          fontSize: 17,
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          outline: 'none',
        }}
      >
        {joined ? 'Joined' : 'Join'}
      </button>

      {showPrompt && (
        <div style={backdropStyle}>
          <div style={modalStyle}>
            <img
              src="/community.svg"
              alt="Commun"
              style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 14 }}
            />
            <h2 style={{ textAlign: 'center', fontSize: 22, margin: 0, marginBottom: 10 }}>
              r/indiafitchecks
            </h2>
            <div style={welcomeBoxStyle}>
              Welcome to our subreddit, <b>u/Powerful-Leg-7920</b>!
              <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
                – r/indiafitchecks Mod Team
              </div>
            </div>
            <button
              onClick={handleGotIt}
              style={gotItButtonStyle}
            >
              Got It
            </button>
            <div style={{ textAlign: 'center', color: '#888', fontSize: 13, marginTop: 6 }}>
              Access the community guide any time in the sidebar
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const backdropStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.25)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalStyle = {
  background: '#fff',
  borderRadius: 24,
  padding: 24,
  width: '90vw',
  maxWidth: 360,
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const welcomeBoxStyle = {
  backgroundColor: '#f6f7f8',
  borderRadius: 16,
  padding: 14,
  margin: '12px 0',
  textAlign: 'center',
  color: '#333',
  fontSize: 16,
};

const gotItButtonStyle = {
  width: '96%',
  backgroundColor: '#0068d1',
  color: '#fff',
  border: 'none',
  borderRadius: 32,
  padding: '11px 0',
  fontSize: 18,
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: 12,
};

export default SubredditJoinButton;
