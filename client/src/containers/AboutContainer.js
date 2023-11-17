import React from 'react'
import Profile from '../components/AboutComponents/Profile'
import ContactDetails from '../components/AboutComponents/ContactDetails'
import EducationPic from '../components/AboutComponents/EducationPic'
import DownloadResumeButtons from '../components/AboutComponents/DownloadResumeButtons'

const AboutContainer = () => {
  return (

    <div className="container">
      <div className="row">
      <Profile/>
      <EducationPic />
      <ContactDetails/> 
      <DownloadResumeButtons/> 
      </div>
      <br />
    </div>
    
  )
}

export default AboutContainer