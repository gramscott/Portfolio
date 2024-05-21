import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="col-md-7 bio-container p-4 rounded shadow">
      <h2 className="mb-4 left-align profile-headers">About Me</h2>
      <p className="lead left-align">
      Enthusiastic and creative software developer with an extensive educational background in software engineering, including a Master's in Creative Media Practice and a Bachelor of Arts (Hons) in Drama. A graduate of CodeClan’s rigorous 16-week intensive program, equipped with a diverse skill set across multiple programming languages and development frameworks. Demonstrated ability to deliver innovative digital solutions with a strong commitment to crafting responsive and user-centric applications. Eager to contribute to an evolving tech company.      </p>
      <hr />
      <div className="mt-4">
        <h3 className='left-align profile-headers'>Education</h3>
        <ul className='mt-4'>
          <li className='mb-3 left-align'>
            <strong>CodeClan – Glasgow – 2023</strong>
            <br />
            SCQF Level 8, Professional Software Development
          </li>
          <li className='mb-3 left-align'>
            <strong>University of West of Scotland - Ayr - 2018 - 2019</strong>
            <br />
            MA, Creative Media Practice
          </li>
          <li className='mb-3 left-align'>
            <strong>University of Cumbria - Lancaster - 2014 - 2017</strong>
            <br />
            BA (Hons) Drama (2:1)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
