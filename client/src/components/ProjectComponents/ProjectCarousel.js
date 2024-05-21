import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './ProjectCarousel.css'; 
import smecoPic from '../../images/carousel-smeco-pic.png';
import empowerMePic from '../../images/carousel-empowerme-pic.png';
import bonniePic from '../../images/carousel-bonnie-pic.jpg';
import jmdPic from '../../images/carousel-jmd-pic.png';


const ProjectCarousel = () => {

  const sliderRef = useRef(null); 

    const settings = {
      dots: false, 
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const goToNextSlide = () => {
      sliderRef.current.slickNext(); 
    };
  
    const goToPrevSlide = () => {
      sliderRef.current.slickPrev();
    };

  return (
    <div className='project-carousel'>
       <Slider {...settings} ref={sliderRef}>
       <div className="project-slide">
       <img src={jmdPic} alt="pic-1" className="img-fluid pic-1" />
        <b>Front-End JavaScript Project: JMD Alloys</b>
        <p>Technologies: React, JavaScript, VS Code, Bootstrap, CSS, Node.js. </p>
        <ul>
          <li>Independently created and hosted the website for an alloy refurbishment service, JMD Alloys.</li>
          <li>Engaged in detailed consultations with the business owner to define the website’s strategic vision, contributing creative ideas and transforming the concept into a dynamic online presence.</li>
          <li>Implemented responsive web design and user-friendly interfaces while ensuring cross-browser compatibility and mobile responsiveness.</li>
          <a href="https://jmdalloys.co.uk/">
            <i className="fa fa-google"></i> Website Link
          </a>
          <br />
          <a href='https://github.com/gramscott/jmdalloy'>
            <i className="fa fa-github"></i> GitHub Repository
          </a>
        
        </ul>
      </div>


       <div className="project-slide">
        <img src={smecoPic} alt="pic-1" className="img-fluid pic-1" />
        <b>Full-Stack JavaScript Project: Smeco</b>
        <p>Technologies: React, JavaScript, VS Code, API, Express.js, Cypress, JSX, Unit-Testing. Group [5 days]</p>
        <ul>
          <li>Collaborated to raise awareness about carbon footprints and provide users with tips to reduce their environmental impact.</li>
          <li>Implemented features such as a multiple-choice quiz and a community page for users to collect tips and engage with like-minded individuals.</li>
          <li>Contributed to database creation and front-end development.</li>
          <a href="https://github.com/gramscott/smeco">
            <i className="fa fa-github"></i> GitHub Repository
          </a>
        </ul>
      </div>

      <div className="project-slide">
        <img src={empowerMePic} alt="pic-2" className="img-fluid pic-2" />
        <b>Full-Stack Java Project: eMpowerMe</b>
        <p>Technologies: Java, IntelliJ IDEA, VS Code, React, Git, GitHub, Spring, CSS, JavaScript, Express, RESTful API’s, JSX, MongoDB, MYSQL. Pair [13 days]</p>
        <ul>
          <li>Collaborated to create a personalized self-help affirmation app where users could customize their positive affirmations and establish a safe space.</li>
          <li>Created the Java backend and successfully connected the React frontend through RESTful routes.</li>
          <li>Seeded and handled enormous data loader for presentation.</li>
          <a href="https://github.com/gramscott/eMpowerMe">
            <i className="fa fa-github"></i> GitHub Repository
          </a>
        </ul>
      </div>

      <div className="project-slide">
        <img src={bonniePic} alt="pic-3" className="img-fluid pic-3" />
        <b>Full-Stack Python Project: My Bonnie Scotland</b>
        <p>Technologies: Python, HTML, CSS, SQL, Unit Testing, VS Code. Solo [5 days]</p>
        <ul>
          <li>Created a hypothetical CRUD app</li>
          <li>“Filmmakers” can pencil in the filming sets they have worked on and the ones they would like to work on.</li>
          <a href="https://github.com/gramscott/Solo-project-">
            <i className="fa fa-github"></i> GitHub Repository
          </a>
        </ul>
      </div>
    </Slider>

    <div className="button-navigation">
    <button className="prev-button" onClick={goToPrevSlide}>Previous</button>
    <button className="next-button" onClick={goToNextSlide} >Next</button>
  </div>
    </div>
   
  );
};

export default ProjectCarousel;
