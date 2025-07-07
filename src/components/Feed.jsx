import React from 'react';
import PostCard from './Postcard';
import './Feed.css';

const Feed = () => {
  return (
    <main className="feed">
      <div className="filter-sort-strip">
        <select>
          <option>All</option>
          <option>Following</option>
          <option>Communities</option>
        </select>
        <select>
          <option>Latest</option>
          <option>Trending</option>
          <option>Most Liked</option>
        </select>
      </div>

      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
};

export default Feed;
