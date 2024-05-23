import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Post from './Post';
import Navbar from './Navbar';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = useCallback(() => {
    if (loading) return;

    setLoading(true);
    const apiKey = '44015716-c3e5d125d79be301bb2f961b3';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=girls+boys&image_type=photo&per_page=20&page=${page}`;

    axios.get(apiUrl)
      .then(response => {
        if (response.status === 200 && Array.isArray(response.data.hits)) {
          setPosts(prevPosts => [...prevPosts, ...response.data.hits]);
          setHasMore(response.data.hits.length > 0);
          setPage(prevPage => prevPage + 1);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading, page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 5 && hasMore && !loading) {
      fetchPosts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed-container">
      <div className="feed">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post, index) => (
            <Post key={`${post.id}-${index}`} post={post} />
          ))
        ) : (
          <p>No posts available!</p>
        )}
      </div>
      {loading && <p>Loading more posts...</p>}
      <Navbar onCreatePost={handleCreatePost} />
    </div>
  );
};

export default Feed;
