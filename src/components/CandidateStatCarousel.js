import React from 'react';
import { CCard, CCardBody, CCardText, CRow, CCol } from '@coreui/react';

const candidateStats = [
  { label: 'Created', count: 500, color: 'info' },
  { label: 'Positions', count: 200, color: 'warning' },
  { label: 'Posted', count: 10, color: 'primary' },
  { label: 'Bookmarked', count: 5, color: 'success' }
];

const CandidateStatsCarousel = () => {
  return (
    <div className="container my-4">
      <h4 className="mb-3">Candidates</h4>
      <CRow xs={{ cols: 2 }} md={{ cols: 4 }} className="g-3">
        {candidateStats.map((stat, idx) => (
          <CCol key={idx}>
            <CCard className="h-100 shadow-sm">
              <CCardBody className="text-start">
                <CCardText className="text-muted small mb-1">{stat.label}</CCardText>
                <h3 className={`fw-bold text-${stat.color}`}>{stat.count}</h3>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default CandidateStatsCarousel;
