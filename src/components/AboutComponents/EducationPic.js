import React from 'react';
import gradPic from '../../images/codeclan-graduation-pic.jpg';

const EducationPic = () => {
  return (
    <div className="col-md-5 p-3 mt-2 rounded-shadow">
      <div>
        <img
          src={gradPic}
          alt="CodeClan Graduate Pic"
          className="img-fluid grad-pic"
        />
      </div>
    </div>
  );
};

export default EducationPic;
