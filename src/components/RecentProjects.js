import React from 'react';
import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CBadge
} from '@coreui/react';

const recentProjects = [
  {
    title: 'TalentMatch Admin Portal',
    company: 'TalentMatch',
    location: 'Remote',
    status: 'Active',
    tags: ['React', 'CoreUI', 'Admin'],
  },
  {
    title: 'E-commerce Website',
    company: 'FastDrop',
    location: 'Mumbai, India',
    status: 'Closed',
    tags: ['Next.js', 'Stripe', 'Vercel'],
  },
  {
    title: 'Food Delivery App',
    company: 'QuickBite',
    location: 'Bengaluru, India',
    status: 'Active',
    tags: ['Flutter', 'Firebase', 'Maps'],
  },
  {
    title: 'Portfolio Website',
    company: 'John Doe',
    location: 'Pune, India',
    status: 'Active',
    tags: ['HTML', 'CSS', 'Hosting'],
  },
];

const statusColor = {
  Active: 'success',
  Closed: 'secondary',
};

const RecentProjects = () => {
  return (
    <div className="container my-5">
      <h5 className="mb-4">Recent Projects</h5>
      {recentProjects.map((project, index) => (
        <CCard key={index} className="mb-3 shadow-sm">
          <CCardBody>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <CCardTitle className="mb-1">{project.title}</CCardTitle>
                <CCardText className="text-muted mb-0">{project.company}</CCardText>
                <CCardText className="text-muted small">{project.location}</CCardText>
              </div>
              <CBadge color={statusColor[project.status]} className="mt-1">
                {project.status}
              </CBadge>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <CBadge key={i} color="info" className="text-white">
                  {tag}
                </CBadge>
              ))}
            </div>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default RecentProjects;
