import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { getHeadlines } from '../../utils/headlines';
import { dataP } from '../../utils/pseudo';
const posts = [
  { id: 1, title: 'Top Trending', content: 'Most liked post here!', likes: 100, comments: 24 },
  { id: 2, title: 'React Guide', content: 'Upvoted many times', likes: 86, comments: 16 }
];

const Popular = () => {
  const [generalFeed,setGeneralFeed] = useState([...dataP?.articles]);
    useEffect(() => {
    const fetchData = async () => {
      const data = await getHeadlines("general");
      setGeneralFeed(data);
    };
    fetchData();
  }, []);
  return (
    <main className="feed">
      <h2>Popular Posts</h2>
      {generalFeed.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Popular;
