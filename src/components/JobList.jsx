// JobList.jsx
import React, { useState } from 'react';
import SoftwareJobs from './Section/SoftwareJobs';
import Internships from './Section/Internships';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';

const JobList = ({ onApplyClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  return (
    <div className="job-list-container">
      <SearchBar onSearch={setSearchTerm} />
      <FilterDropdown onFilterChange={setFilter} />
      <div className="job-section">
        <h2>Software Jobs</h2>
        <SoftwareJobs searchTerm={searchTerm} filter={filter} onApplyClick={onApplyClick} />
      </div>
      <div className="job-section">
        <h2>Internships</h2>
        <Internships searchTerm={searchTerm} filter={filter} onApplyClick={onApplyClick} />
      </div>
    </div>
  );
};

export default JobList;
