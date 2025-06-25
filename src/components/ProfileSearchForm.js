import React, { useState } from 'react'
import {
  CForm,
  CFormInput,
  CFormCheck,
  CFormSelect,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
  CFormSwitch,
} from '@coreui/react'

const ProfileSearch = () => {
  const [keywordsToExclude, setKeywordsToExclude] = useState([])
  const [skills, setSkills] = useState([])

  const addKeywordToExclude = () => setKeywordsToExclude([...keywordsToExclude, ''])
  const updateKeyword = (value, index) => {
    const updated = [...keywordsToExclude]
    updated[index] = value
    setKeywordsToExclude(updated)
  }

  const addSkill = () => setSkills([...skills, ''])
  const updateSkill = (value, index) => {
    const updated = [...skills]
    updated[index] = value
    setSkills(updated)
  }

  return (
    <CRow className="p-4">
      {/* Left Panel */}
      <CCol md={8}>
        <CCard>
          <CCardHeader>
            <h5 className="fw-bold pt-2">Profile Search</h5>
            <small className="text-muted">
              Search from over <strong>1,00,000+</strong> profiles to find your perfect candidate
            </small>
          </CCardHeader>
          <CCardBody>
            <CForm className="pb-2">
              <h6 className="fw-semibold mb-1">Search Candidates</h6>

              <CFormInput
                className="mb-2"
                type="text"
                label="Search Title"
                placeholder="eg: Java Developer, JEE, Springboot"
              />
              <CFormInput
                className="mt-0"
                type="text"
                label="Keywords Search"
                placeholder="eg: Java Developer, JEE, Springboot"
              />
              <CFormCheck label="Mark all keywords as mandatory" className="mt-2 mb-2" />

              {/* Dynamic Excluded Keywords */}
              <CButton color="light" className="mt-2 me-2" onClick={addKeywordToExclude}>
                + Add keyword to exclude
              </CButton>
              {keywordsToExclude.map((keyword, index) => (
                <CFormInput
                  key={index}
                  className="mt-2"
                  placeholder="Exclude keyword"
                  value={keyword}
                  onChange={(e) => updateKeyword(e.target.value, index)}
                />
              ))}

              {/* Dynamic Skills */}
              <CButton color="light" className="mt-2" onClick={addSkill}>
                + Add Skills
              </CButton>
              {skills.map((skill, index) => (
                <CFormInput
                  key={index}
                  className="mt-2"
                  placeholder="Skill"
                  value={skill}
                  onChange={(e) => updateSkill(e.target.value, index)}
                />
              ))}

              {/* Experience */}
              <CRow className="mt-3">
                
              </CRow>

              {/* Preferred Location */}
              <CFormInput
                type="text"
                className="mt-0"
                label="Preferred Location"
                placeholder="Add Preferred Location"
              />
              <CFormCheck
                label="Include willing candidates for relocations to listed locations"
                className="mt-2"
              />

              {/* Annual CTC */}
              <h6 className="mt-4">Stipend</h6>
              <CRow className="g-2 align-items-end">
                <CCol md={2}>
                  <CFormSelect options={['INR']} />
                </CCol>
                <CCol md={3}>
                  <CFormSelect options={['Minimum', '1', '2', '3', '4', '5']} />
                </CCol>
                <CCol md={3}>
                  <CFormSelect options={['Maximum', '10', '15', '20', '25']} />
                </CCol>
                <CCol md={2}>
                  <CFormSelect options={['Lacs']} />
                </CCol>
              </CRow>
              <CFormCheck
                label="Include applicants who did not reveal their Annual CTC"
                className="mt-2"
              />

              {/* Employment Section */}
              <h6 className="mt-4">Education</h6>
              
              <CFormInput
                label="Department"
                className="mt-0"
                placeholder="eg: Computer Science, Mechanical, Electrical"
              />
            </CForm>
            <a href='#/UserProfile'>

            <CButton type="submit" color="info" className="mt-2">
                <div className='text-white'>Search</div>   
            </CButton>
            </a>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Right Panel - Recently Searched */}
      <CCol md={4}>
        <CCard>
          <CCardHeader>
            <h6 className="fw-semibold pt-2">Recently Searched</h6>
          </CCardHeader>
          <CCardBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <CListGroup flush>
              {[
                { title: 'Jr Developer', loc: 'Mysore, Karnataka', exp: '0 - 2', salary: '4 - 5' },
                {
                  title: 'UX Designer',
                  loc: 'Bangalore, Karnataka',
                  exp: '0 - 3',
                  salary: '4 - 8',
                },
                {
                  title: 'Python Developer',
                  loc: 'Pune, Maharashtra',
                  exp: '2 - 4',
                  salary: '7 - 12',
                },
                {
                  title: 'Angular Developer',
                  loc: 'Indore, Maharashtra',
                  exp: '1 - 4',
                  salary: '4 - 5',
                },
                {
                  title: 'UI/UX Designer',
                  loc: 'Gurugaon, Haryana',
                  exp: '3 - 5',
                  salary: '8 - 15',
                },
              ].map((item, index) => (
                <CListGroupItem key={index}>
                  <div className="fw-semibold">{item.title}</div>
                  <small className="text-muted">{item.loc}</small>
                  <br />
                  <small>
                    🧳 {item.exp} years exp &nbsp;&nbsp; 💰 {item.salary} Lacs
                  </small>
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ProfileSearch
