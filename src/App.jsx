// App.jsx
import React, { useState } from 'react';
import JobList from './components/JobList';
import ApplicationForm from './components/ApplicationForm';
import './components/styles.css';

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="app">
      <h1>Job Listings</h1>
      {selectedJob ? (
        <ApplicationForm job={selectedJob} onBack={() => setSelectedJob(null)} />
      ) : (
        <JobList onApplyClick={handleApplyClick} />
      )}
    </div>
  );
};

export default App;
