// FilterDropdown.jsx
import React from 'react';

const FilterDropdown = ({ onFilterChange }) => (
  <select onChange={(e) => onFilterChange(e.target.value)} className="filter-dropdown">
    <option value="All">All</option>
    <option value="Full-Time">Full-Time</option>
    <option value="Part-Time">Part-Time</option>
    <option value="Remote">Remote</option>
  </select>
);

export default FilterDropdown;
