import React from 'react';

const Profile = () => {
  return (
    <div className="col-md-7 bio-container p-4 rounded shadow">
      <h2 className="mb-4">About Me</h2>
      <p className="lead">
        Ambitious Junior Developer with a unique background in screenwriting, acting, retail, and hospitality. Recently graduated from a 16-week immersive Software Engineer Bootcamp at CodeClan. Committed to achieving strong results and bringing a fresh perspective to the field of software engineering.
      </p>
      <hr />
      <div className="mt-5">
        <h3>Education</h3>
        <ul className='mt-3'>
          <li className='mb-3'>
            <strong>CodeClan – Glasgow – 2023</strong>
            <br />
            SCQF Level 8, Professional Software Development
          </li>
          <li className='mb-3'>
            <strong>University of West of Scotland - Ayr - 2018 - 2019</strong>
            <br />
            MA, Creative Media Practice
          </li>
          <li className='mb-3'>
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
