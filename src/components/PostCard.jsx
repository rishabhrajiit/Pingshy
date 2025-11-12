import React, { useState } from 'react';
import './PostCard.css';
import {
  FaThumbsUp,
  FaThumbsDown,
  FaCommentDots,
  FaShare,
  FaEllipsisH
} from 'react-icons/fa';

const PostCard = ({ post }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // --- Join button states ---
  const [joined, setJoined] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleJoinClick = () => {
    if (!joined) {
      setShowPrompt(true);
    } else {
      setJoined(false);
    }
  };

  const handleGotIt = () => {
    setJoined(true);
    setShowPrompt(false);
  };

  return (
    <div className="post-card ">
      <div className="post-header">
        <div className="user-info">
          <div className="avatar"></div>
          <div className="user-meta">
            <span className="name">u/{post?.source?.name}</span>
            <span className="time"><span ></span>{post?.publishedAt.split("T")[0]}</span>
          </div>
        </div>

        <div className="header-actions">
          {/* Join button with dynamic style and text */}
          <button
            onClick={handleJoinClick}
            className="join-btn"
            style={{
              backgroundColor: joined ? '#e4e4e4' : '#0079d3',
              color: joined ? '#1a1a1a' : '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '20px',
              padding: '6px 16px',
              fontWeight: '600',
              fontSize: '14px',
              transition: 'background-color 0.3s',
            }}
          >
            {joined ? 'Joined' : 'Join'}
          </button>

          <div className="menu-wrapper">
            <FaEllipsisH className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && (
              <div className="menu-options">
                <div>Follow Post</div>
                <div>Save</div>
                <div>Hide</div>
                <div>Report</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="post-body">
        <h3>{post.title}</h3>
        <p>{post.content}</p>

        <div className="w-full flex justify-center">
          <img
            src={post.image}
            alt="description"
            className="max-w-full h-auto object-contain rounded-lg"
          />
        </div>

        <div className="counts">
          <span>👍 {post.likes} Likes</span>
          <span>💬 {post.comments} Comments</span>
        </div>
      </div>

      <div className="post-footer">
        <div className="actions">
          <FaThumbsUp title="Like" />
          <FaThumbsDown title="Dislike" />
          <FaCommentDots title="Comment" />
          <FaShare title="Share" />
        </div>
      </div>

      {/* Modal Prompt */}
      {showPrompt && (
        <div className="join-modal-backdrop">
          <div className="join-modal">
            <img
              src="/community.svg"
              alt="Community Icon"
              style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: '14px' }}
            />
            <h2 style={{ textAlign: 'center', margin: 0, marginBottom: '10px', fontSize: '22px' }}>
              {post?.source?.name}
            </h2>
            <div
              style={{
                background: "#f6f7f8",
                borderRadius: '16px',
                padding: '14px',
                margin: '12px 0',
                textAlign: 'center',
                color: '#333',
                fontSize: '16px',
              }}
            >
              Welcome to our community, <b>u/{post?.source?.name}</b>!
              <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                – r/indiafitchecks Mod Team
              </div>
            </div>
            <button
              onClick={handleGotIt}
              style={{
                width: '96%',
                margin: '12px auto 10px',
                backgroundColor: '#0068d1',
                color: '#fff',
                border: 'none',
                borderRadius: '32px',
                fontWeight: 600,
                fontSize: '18px',
                padding: '11px 0px',
                cursor: 'pointer',
                display: 'block',
              }}
            >
              Got It
            </button>

            <div style={{ textAlign: 'center', color: '#888', fontSize: '13px' }}>
              Access the community guide any time in the sidebar
            </div>
          </div>
          <style>{`
            .join-modal-backdrop {
              position: fixed;
              top: 0; left: 0; right: 0; bottom: 0;
              background-color: rgba(0,0,0,0.25);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
            }
            .join-modal {
              background: white;
              border-radius: 24px;
              max-width: 360px;
              width: 90vw;
              padding: 24px 20px 20px;
              box-shadow: 0 4px 16px rgba(0,0,0,0.2);
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default PostCard;
