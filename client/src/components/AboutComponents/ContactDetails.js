import React from 'react';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className="contact-details-container col-md-7 p-4 rounded shadow left-align">
          <h3 className="mb-4 contact-headers ">Contact Details</h3>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Linkedin size={28} className="mr-2" />
          <a href="https://www.linkedin.com/in/graeme-scott-137059101/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </li>
        <li className="mb-3">
          <Github size={28} className="mr-2" />
          <a href="https://github.com/gramscott" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </li>
        <li className="mb-3">
          <Envelope size={28} className="mr-2" />
          <a href="mailto:graemesco96@gmail.com ">
          graemesco96@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
