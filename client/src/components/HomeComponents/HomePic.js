import React from 'react';
import headshotPic from '../../images/Headshot.png';
import './HomePic.css';



const HomePic = () => {
  return (
    <div className='container container-style'>
      <h1 className='name'>Graeme Scott</h1>
      <div>
        <img
          src={headshotPic} 
          alt="Graeme Scott"
          className='headshot img-fluid'
        />
      </div>
      <h3 className='job-title'>Full-Stack Software Engineer</h3>
    </div>
  );
};

export default HomePic;
