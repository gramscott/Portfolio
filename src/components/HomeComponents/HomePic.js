import React from 'react';
import './HomePic.css';

const HomePic = () => {
  return (
    <div className='container container-style'>
      <h1 className='name'> Graeme Scott</h1>
      <div>
        <img
          src="./images/Headshot.png"
          alt="Graeme Scott"
          className='headshot'
        />
      </div>
      <h3 className='job-title'>Full-Stack Software Engineer</h3>
    </div>
  );
};

export default HomePic;
