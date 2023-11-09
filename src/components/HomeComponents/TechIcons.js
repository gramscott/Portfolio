import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faJava, faPython, faGit, faGithub, faBootstrap, faHtml5, faCss3
} from '@fortawesome/free-brands-svg-icons';
import './TechIcons.css'; 

const TechIcons = () => {

  return (

    <div className='center'>
    <FontAwesomeIcon icon={faReact} className='icons'/>
    <FontAwesomeIcon icon={faJava} className='icons'/>
    <FontAwesomeIcon icon={faPython} className='icons'/>
    <FontAwesomeIcon icon={faGit} className='icons'/>
    <FontAwesomeIcon icon ={faGithub} className='icons'/>
    <FontAwesomeIcon icon={faBootstrap} className='icons'/>
    <FontAwesomeIcon icon={faHtml5} className='icons'/>
    <FontAwesomeIcon icon={faCss3} className='icons'/>
    </div>
  )

}

export default TechIcons