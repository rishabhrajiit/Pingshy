import React from 'react';
import PostCard from './PostCard';

const posts = [
  { id: 1, title: 'Top Trending', content: 'Most liked post here!', likes: 100, comments: 24 },
  { id: 2, title: 'React Guide', content: 'Upvoted many times', likes: 86, comments: 16 }
];

const Popular = () => {
  return (
    <main className="feed">
      <h2>Popular Posts</h2>
      {posts.sort((a, b) => b.likes - a.likes).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Popular;
