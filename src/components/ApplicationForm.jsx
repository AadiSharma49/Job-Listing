import React, { useState } from 'react';
import './styles.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    college: '',
    projectsLink: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="application-form">
      <h2>Apply for the Job</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="college">College/University:</label>
        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
          required
        />

        <label htmlFor="projectsLink">Projects Link:</label>
        <input
          type="text"
          name="projectsLink"
          value={formData.projectsLink}
          onChange={handleChange}
          required
        />

        <label htmlFor="experience">Experience (if any):</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows="4"
        />

        <label htmlFor="resume">Upload Resume:</label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
        />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
