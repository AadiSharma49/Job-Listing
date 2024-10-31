// JobCard.jsx
import React from 'react';

const JobCard = ({ job, onApplyClick }) => (
  <div className="job-card">
    <h3>{job.title}</h3>
    <p><strong>Company:</strong> {job.company}</p>
    <p><strong>Location:</strong> {job.location}</p>
    <p><strong>Type:</strong> {job.type}</p>
    <p>{job.description}</p>
    <button className="apply-btn" onClick={() => onApplyClick(job)}>Apply Now</button>
  </div>
);

export default JobCard;
