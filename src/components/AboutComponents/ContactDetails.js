import React from 'react';
import { Linkedin, Github, Envelope, Phone } from 'react-bootstrap-icons';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className="contact-details-container col-md-7 p-4 rounded shadow left-align">
      <h3 className="mb-4 font-weight-bold">Contact Details</h3>
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
          graemesco96@gmail.com
        </li>
        <li>
          <Phone size={28} className="mr-2" />
          +447867865514
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
