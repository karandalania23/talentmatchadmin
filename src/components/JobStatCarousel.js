import React from 'react';
import { CCard, CCardBody, CRow, CCol } from '@coreui/react';
import { FaArrowRight } from 'react-icons/fa'; // for arrow icon

const jobStats = [
  { label: 'Created', count: 500, color: 'primary', link: '/jobs/created' },
  { label: 'Positions', count: 200, color: 'info', link: '/jobs/positions' },
  { label: 'Posted', count: 10, color: 'warning', link: '/jobs/posted' },
  { label: 'Bookmarked', count: 5, color: 'info', link: '/jobs/bookmarked' },
  { label: 'All', count: 500, color: 'primary', link: '/jobs/all' },
  { label: 'Active', count: 350, color: 'info', link: '/jobs/active' },
  { label: 'InActive', count: 50, color: 'danger', link: '/jobs/inactive' },
  { label: 'Closed', count: 100, color: 'success', link: '/jobs/closed' },
];

const JobStatsCarousel = () => {
  return (
    <div className="container my-4">
      <h4 className="mb-3">Jobs</h4>
      <CRow xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 4 }} className="g-3">
        {jobStats.map((stat, idx) => (
          <CCol key={idx}>
            <a href={stat.link} className="text-decoration-none">
              <CCard className="h-100 shadow-sm hover-shadow" style={{ cursor: 'pointer' }}>
                <CCardBody className="d-flex justify-content-between align-items-center">
                  <div className="text-start">
                    <div className="text-muted">{stat.label}</div>
                    <div className={`fw-bold fs-4 text-${stat.color}`}>{stat.count}</div>
                  </div>
                  <div className="text-end text-muted">
                    <FaArrowRight />
                  </div>
                </CCardBody>
              </CCard>
            </a>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default JobStatsCarousel;
