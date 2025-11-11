import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import './Feed.css';
import { getHeadlines } from '../../utils/headlines';

const posts = [
  { id: 1, title: 'Welcome to the homepage', content: 'This is a post', likes: 15, comments: 5 },
  { id: 2, title: 'React Rocks', content: 'React is great for building UIs.', likes: 8, comments: 3 },
  { id: 3, title: 'Vite is fast', content: 'Faster dev experience!', likes: 12, comments: 4 }
];

const Feed = () => {
  const [generalFeed,setGeneralFeed] = useState([]);
  useEffect(() => {
    const data = getHeadlines("general")
  },[])
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
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Feed;
