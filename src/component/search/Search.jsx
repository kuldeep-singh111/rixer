import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Post from '../feed/Post';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    const apiKey = '44015716-c3e5d125d79be301bb2f961b3';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${value}&image_type=photo`;

    axios.get(apiUrl)
      .then(response => {
        if (response.status === 200 && Array.isArray(response.data.hits)) {
          setSearchResults(response.data.hits);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the search results!', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Search..."
        className="search-input"
      />
      {loading && <p>Loading...</p>}
      <div className="search-results">
        {searchResults.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Search;

