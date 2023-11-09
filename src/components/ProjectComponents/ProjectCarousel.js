import React, {useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProjectCarousel.css'
import smecoPic from '../../images/carousel-smeco-pic.png'
import empowerMePic from '../../images/carousel-empowerme-pic.png'

const ProjectCarousel = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };


  return (
    <div className='project-carousel'>
  <Slider ref={sliderRef} {...settings}>
    <div className='project-slide'>

      <img src={smecoPic} alt='pic-1' className='img-fluid pics' />
      <b>Full-Stack JavaScript Project: smeco</b>
      <p>
        React, JavaScript, VS Code, API, Express.js, Cypress, JSX, Unit-Testing. Group [5 days]
      </p>
      <ul>
        <li>
        Collaborated to raise awareness about carbon footprints and provide users with tips to reduce their environmental impact.
        </li>
        <li>
        Implemented features such as a multiple-choice quiz and a community page for users to collect tips and engage with like-minded individuals.
        </li>
        <li>Contributed to database creation and front-end development.</li>
        <a href='https://github.com/gramscott/smeco'>
          <i className='fab fa-github'>GitHub Repository</i>
        </a>
      </ul>
    </div>

    <div className='project-slide'>
      <img src={empowerMePic} alt='pic-2' className='img-fluid pics' />
      <b>Full-Stack Java Project: Empower Me</b>
      <p>
        Java, Spring Boot, IntelliJ, API, JUnit, JavaScript, Vs Code, React, MongoDB HTML, CSS. Group [5 days]
      </p>
      <ul>
          <li>Collaborated to create a personalized self-help affirmation app where users could customize their positive affirmations and establish a safe space.</li>
          <li>Created the Java backend and successfully connected the React frontend through RESTful routes.</li>
          <li>Seeded and handled enormous data loader for presentation.</li>
          <a href="https://github.com/gramscott/eMpowerMe">
          <i className="fa fa-github"></i> GitHub Repository
          </a>
        </ul>
      </div>


  </Slider>
</div>

    
  )
}

export default ProjectCarousel