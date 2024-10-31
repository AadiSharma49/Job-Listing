// SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search for a job title..."
    onChange={(e) => onSearch(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;
