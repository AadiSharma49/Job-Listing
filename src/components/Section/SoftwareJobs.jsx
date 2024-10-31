
import React from 'react';
import JobCard from '../JobCard';

const SoftwareJobs = ({ searchTerm, filter, onApplyClick }) => {
  const jobsData = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote', type: 'Full-Time', description: 'Design and develop web applications.' },
    {id:2, title:"Software test engineer", company: "FunTastic Ventures", location:"OnSite" ,type: "Full-Time",description: "Creating testing procedures to evaluate the performance of the software"},
    { id: 3, title: 'UI/UX Designer', company: 'Creative Minds', location: 'Los Angeles, CA', type: 'Part-Time', description: 'Create user-friendly designs and improve user experience.' },
  { id: 4, title: 'Data Scientist', company: 'Analytics Co.', location: 'San Francisco, CA', type: 'Full-Time', description: 'Analyze data to drive business decisions.' },
  { id: 5, title: 'Software Engineer Intern', company: 'Innovate Inc.', location: 'Remote', type: 'Internship', description: 'Assist in developing software solutions and learning industry practices.' },
  { id: 6, title: 'Project Manager', company: 'Global Tech', location: 'Chicago, IL', type: 'Full-Time', description: 'Oversee projects from conception to delivery.' },
  { id: 7, title: 'QA Engineer', company: 'Test Lab', location: 'Austin, TX', type: 'Full-Time', description: 'Ensure software quality through testing and feedback.' },
  { id: 8, title: 'Product Manager', company: 'Productify', location: 'Boston, MA', type: 'Remote', description: 'Lead product development and manage product lifecycle.' },
  { id: 9, title: 'DevOps Engineer', company: 'Cloud Solutions', location: 'Seattle, WA', type: 'Full-Time', description: 'Automate deployment and streamline operations.' },
  { id: 10, title: 'Graphic Designer', company: 'Design Studio', location: 'Miami, FL', type: 'Part-Time', description: 'Create visual concepts to communicate ideas.' },
  { id: 11, title: 'Mobile App Developer', company: 'App World', location: 'Remote', type: 'Full-Time', description: 'Design and develop mobile applications for various platforms.' },
  { id: 12, title: 'Systems Analyst', company: 'Tech Solutions', location: 'Denver, CO', type: 'Full-Time', description: 'Analyze and improve IT systems and processes.' },
  { id: 13, title: 'Content Writer', company: 'Content Co.', location: 'Remote', type: 'Part-Time', description: 'Write engaging content for websites and blogs.' },
  { id: 14, title: 'Network Engineer', company: 'Network Solutions', location: 'Houston, TX', type: 'Full-Time', description: 'Design and implement network configurations.' },
  { id: 15, title: 'Cloud Architect', company: 'Cloud Innovators', location: 'San Jose, CA', type: 'Full-Time', description: 'Design cloud solutions and infrastructure.' },
  { id: 16, title: 'Salesforce Developer', company: 'CRM Experts', location: 'Remote', type: 'Full-Time', description: 'Develop and maintain Salesforce applications.' },
  { id: 17, title: 'SEO Specialist', company: 'Marketing Pro', location: 'Atlanta, GA', type: 'Part-Time', description: 'Optimize website content for search engines.' },
  { id: 18, title: 'Cybersecurity Analyst', company: 'Secure Tech', location: 'Philadelphia, PA', type: 'Full-Time', description: 'Protect company systems and data from cyber threats.' },
  { id: 19, title: 'Technical Support Specialist', company: 'HelpDesk Solutions', location: 'Remote', type: 'Full-Time', description: 'Provide technical support and troubleshooting.' },
  { id: 20, title: 'Machine Learning Engineer', company: 'AI Innovators', location: 'New York, NY', type: 'Full-Time', description: 'Develop machine learning models and algorithms.' },
    // More jobs
  ];

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'All' || job.type === filter)
  );

  return filteredJobs.map((job) => (
    <JobCard key={job.id} job={job} onApplyClick={onApplyClick} />
  ));
};

export default SoftwareJobs;
