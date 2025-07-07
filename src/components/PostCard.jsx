import React, { useState } from 'react';
import './PostCard.css';
import { FaThumbsUp, FaThumbsDown, FaCommentDots, FaShare, FaEllipsisH } from 'react-icons/fa';

const PostCard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="user-info">
          <div className="avatar"></div>
          <div className="user-meta">
            <span className="name">Name</span>
            <span className="time">2h ago</span>
          </div>
        </div>

        <div className="header-actions">
          <button className="join-btn">Join</button>
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
        <p>This is a test post content.</p>
        <div className="image-placeholder" />
        <div className="counts">
          <span>👍 24 Likes</span>
          <span>💬 10 Comments</span>
        </div>
      </div>

      <div className="post-footer">
        <div className="actions">
          <FaThumbsUp />
          <FaThumbsDown />
          <FaCommentDots />
          <FaShare />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
