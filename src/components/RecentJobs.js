import React from 'react';
import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CBadge
} from '@coreui/react';

const recentJobs = [
  {
    title: 'Frontend Developer',
    company: 'TechNest Inc.',
    location: 'Remote',
    status: 'Active',
    tags: ['Full-time', 'Remote', 'React'],
  },
  {
    title: 'Backend Engineer',
    company: 'DataCore Solutions',
    location: 'Bengaluru, India',
    status: 'Closed',
    tags: ['Full-time', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Product Manager',
    company: 'InnoWave',
    location: 'Pune, India',
    status: 'Active',
    tags: ['Hybrid', 'Agile', 'Leadership'],
  },
  {
    title: 'UI/UX Designer',
    company: 'PixelEdge',
    location: 'Delhi, India',
    status: 'Active',
    tags: ['Remote', 'Figma', 'Creative'],
  },
];

const statusColor = {
  Active: 'success',
  Closed: 'secondary',
};

const RecentJobs = () => {
  return (
    <div className="container my-5">
      <h4 className="mb-4">Recent Projects</h4>
      {recentJobs.map((job, index) => (
        <CCard key={index} className="mb-3 shadow-sm">
          <CCardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <CCardTitle className="mb-1">{job.title}</CCardTitle>
                <CCardText className="text-muted mb-0">{job.company}</CCardText>
                <CCardText className="text-muted small">{job.location}</CCardText>
              </div>
              <CBadge color={statusColor[job.status]} className="mt-1">{job.status}</CBadge>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {job.tags.map((tag, i) => (
                <CBadge key={i} color="info" className="text-white">{tag}</CBadge>
              ))}
            </div>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default RecentJobs;
