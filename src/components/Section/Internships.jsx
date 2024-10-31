
import React from 'react';
import JobCard from '../JobCard';

const Internships = ({ searchTerm, filter, onApplyClick }) => {
  const jobsData = [
    { id: 2, title: 'Backend Developer Intern', company: 'Innovate Ltd', location: 'New York', type: 'Part-Time', description: 'Assist with server-side logic and database structures.' },
    { id: 3, title: 'UI/UX Design Intern', company: 'Creative Minds', location: 'Los Angeles, CA', type: 'Part-Time', description: 'Support the design team in creating user-friendly interfaces.' },
    { id: 4, title: 'Data Analyst Intern', company: 'Analytics Co.', location: 'San Francisco, CA', type: 'Internship', description: 'Assist with data collection and analysis for ongoing projects.' },
    { id: 5, title: 'Software Engineer Intern', company: 'Innovate Inc.', location: 'Remote', type: 'Internship', description: 'Help develop software solutions and learn industry best practices.' },
    { id: 6, title: 'Marketing Intern', company: 'Global Tech', location: 'Chicago, IL', type: 'Internship', description: 'Assist the marketing team with campaigns and social media outreach.' },
    { id: 7, title: 'QA Intern', company: 'Test Lab', location: 'Austin, TX', type: 'Internship', description: 'Support quality assurance testing of software products.' },
    { id: 8, title: 'Product Management Intern', company: 'Productify', location: 'Boston, MA', type: 'Internship', description: 'Help in managing product development tasks and market research.' },
    { id: 9, title: 'Graphic Design Intern', company: 'Design Studio', location: 'Miami, FL', type: 'Internship', description: 'Create visuals and graphics for various projects.' },
    { id: 10, title: 'Data Science Intern', company: 'AI Innovators', location: 'Remote', type: 'Remote', description: 'Support data science projects with analysis and modeling.' },
    { id: 11, title: 'Web Development Intern', company: 'Web Solutions', location: 'Remote', type: 'Remote', description: 'Assist in building and maintaining websites.' },
    { id: 12, title: 'Content Writing Intern', company: 'Content Co.', location: 'Remote', type: 'Remote', description: 'Create engaging content for blogs and articles.' },
    { id: 13, title: 'Cybersecurity Intern', company: 'Secure Tech', location: 'Philadelphia, PA', type: 'Remote', description: 'Assist in monitoring and improving security measures.' },
    { id: 14, title: 'HR Intern', company: 'HR Solutions', location: 'Remote', type: 'Internship', description: 'Support HR team with recruitment and employee engagement.' },
    { id: 15, title: 'Cloud Computing Intern', company: 'Cloud Innovations', location: 'San Jose, CA', type: 'Internship', description: 'Help in cloud infrastructure management and support.' },
    { id: 16, title: 'Social Media Intern', company: 'Marketing Pro', location: 'Remote', type: 'Internship', description: 'Assist in managing social media accounts and content creation.' },
    { id: 17, title: 'IT Support Intern', company: 'HelpDesk Solutions', location: 'Remote', type: 'Internship', description: 'Provide technical support and assist users with IT issues.' },
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

export default Internships;
