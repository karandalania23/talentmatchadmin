/* eslint-disable prettier/prettier */
import CIcon from '@coreui/icons-react'
import { cilDollar, cilBriefcase, cilList } from '@coreui/icons'

const CandidateInfo = () => {
  // Dummy data
  const data = {
    summary:
      'Experienced software engineer with a strong background in full-stack development, specializing in React and Node.js. Passionate about building scalable web applications and improving user experience.',
    ctc: {
      current: '12 LPA',
      expected: '18 LPA',
    },
    experience: '5 years 3 months',
  }

  return (
    <div className="p-3 border rounded shadow-sm bg-white">
      {/* About */}
      <h5 className="mb-3">About</h5>

      {/* Summary */}
      <p className="text-muted mb-4">
        <CIcon icon={cilList} className="me-2" />
        {data.summary}
      </p>

      {/* CTC */}
      <div className="mb-3">
        <h6>CTC</h6>
        <p className="mb-1 text-muted d-flex align-items-center">
          <CIcon icon={cilDollar} className="me-2" />
          Current: {data.ctc.current}
        </p>
        <p className="mb-0 text-muted d-flex align-items-center">
          <CIcon icon={cilDollar} className="me-2" />
          Expected: {data.ctc.expected}
        </p>
      </div>

      {/* Experience */}
      <div>
        <h6>Experience</h6>
        <p className="text-muted d-flex align-items-center mb-0">
          <CIcon icon={cilBriefcase} className="me-2" />
          {data.experience}
        </p>
      </div>
    </div>
  )
}

export default CandidateInfo
