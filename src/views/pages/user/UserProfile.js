/* eslint-disable prettier/prettier */
import { useLocation } from 'react-router-dom'
import { CAvatar, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibGmail,cilLocationPin, cilPhone } from '@coreui/icons'
import React, { useState } from 'react'
import CandidateInfo from './CandidateInfo'

import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar8 from 'src/assets/images/avatars/8.jpg'

const UserProfile = () => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return <CandidateInfo />
      case 'resume':
        return <Resume />
      case 'questionnaire':
        return <QuestionnaireResponse />
      default:
        return null
    }
  }
  const location = useLocation()
  const { user } = location.state || {}
  const [activeTab, setActiveTab] = useState('info')
  const fallbackUser = {
    user: {
      name: 'Sarah Johnson',
      email: 'Sarah@example.com',
      location: 'New York, USA',
      phone: '+1 (555) 123-4567',
    },
    avatar: {
      src: avatar8,
      status: 'success',
    },
  }

  const profile = user || fallbackUser

  return (
    <div className="container py-4">
      {/* 🔷 HEADER */}
      <div
        className="d-flex justify-content-between align-items-start rounded shadow-sm p-4 mb-5"
        style={{ backgroundColor: '#f8f9fa', minHeight: '30vh' }}
      >
        {/* LEFT SIDE: Avatar + Info */}
        <div className="d-flex align-items-start">
          <CAvatar size="xl" src={profile.avatar.src} status={profile.avatar.status} />
          <div className="ms-4">
            <h2 className="mb-2">{profile.user.name}</h2>

            <p className="mb-1 d-flex align-items-center text-muted">
              <CIcon icon={cibGmail} className="me-2" />{' '}
              {profile.user.email || 'john.doe@example.com'}
            </p>

            <p className="mb-1 d-flex align-items-center text-muted">
              <CIcon icon={cilLocationPin} className="me-2" />{' '}
              {profile.user.location || 'New York, USA'}
            </p>

            <p className="mb-0 d-flex align-items-center text-muted">
              <CIcon icon={cilPhone} className="me-2" /> {profile.user.phone || '+1 (555) 123-4567'}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Connect / Actions */}
        <div className="d-flex flex-column align-items-end">
          <CButton color="primary" className="mb-2">
            Connect
          </CButton>
          <CButton color="secondary" variant="outline">
            Message
          </CButton>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 border-bottom pb-2 d-flex gap-3">
        <button
          className={`btn btn-sm ${activeTab === 'info' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActiveTab('info')}
        >
          Candidate Info
        </button>

        <button
          className={`btn btn-sm ${activeTab === 'resume' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActiveTab('resume')}
        >
          Resume
        </button>

        <button
          className={`btn btn-sm ${activeTab === 'questionnaire' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActiveTab('questionnaire')}
        >
          Questionnaire
        </button>
      </div>

      {/* Two-column layout: Left = tab content, Right = sample candidates */}
      <div className="d-flex gap-4">
        {/* LEFT SIDE: Tab content (max 40%) */}
        <div style={{ flex: '0 0 75%' }}>{renderTabContent()}</div>

        <div className="flex-grow-1">
          <h6 className="mb-3">Similar Candidates</h6>
          <div className="d-flex flex-column gap-3">
            {/* Candidate Card 1 */}
            <div className="border rounded p-3 d-flex align-items-center gap-3 bg-light">
              <CAvatar size="md" src={avatar6} />
              <div>
                <div className="fw-semibold">Aditi Sharma</div>
                <div className="text-muted small">Frontend Developer</div>
                <div className="text-muted small d-flex align-items-center">
                  <CIcon icon={cilLocationPin} size="sm" className="me-1" />
                  Bengaluru, India
                </div>
              </div>
            </div>

            {/* Candidate Card 2 */}
            <div className="border rounded p-3 d-flex align-items-center gap-3 bg-light">
              <CAvatar size="md" src={avatar5} />
              <div>
                <div className="fw-semibold">Rahul Verma</div>
                <div className="text-muted small">Backend Engineer</div>
                <div className="text-muted small d-flex align-items-center">
                  <CIcon icon={cilLocationPin} size="sm" className="me-1" />
                  Hyderabad, India
                </div>
              </div>
            </div>

            {/* Candidate Card 3 */}
            <div className="border rounded p-3 d-flex align-items-center gap-3 bg-light">
              <CAvatar size="md" src={avatar4} />
              <div>
                <div className="fw-semibold">Sneha Kulkarni</div>
                <div className="text-muted small">UI/UX Designer</div>
                <div className="text-muted small d-flex align-items-center">
                  <CIcon icon={cilLocationPin} size="sm" className="me-1" />
                  Pune, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Resume = () => (
  <div>
    <h5>Resume</h5>
    <p>Resume content goes here...</p>
  </div>
)
const QuestionnaireResponse = () => (
  <div>
    <h5>Questionnaire Response</h5>
    <p>Responses to screening questions...</p>
  </div>
)


export default UserProfile
