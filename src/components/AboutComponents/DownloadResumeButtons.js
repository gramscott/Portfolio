import React from 'react';
import './DownloadResumeButtons.css';

const DownloadResumeButtons = () => {
  const pdfFiles = [
    {
      name: 'Software Development CV 09:23.pdf',
      path: 'cvs/Software Development CV 09:23.pdf',
    },
    {
      name: 'Graeme-Scott-Java-CV.pdf',
      path: 'cvs/Graeme-Scott-Java-CV.pdf',
    },
  ];

  return (
    <div className="download-resume-container col-md-5 p-4 rounded shadow">
      <h2>Download Resumes</h2>
      <ul>
        {pdfFiles.map((file, index) => (
          <li key={index}>
            <a
              href={process.env.PUBLIC_URL + '/' + file.path}
              download={file.name}
              className="btn btn-primary btn-3d-square download-button"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadResumeButtons;
