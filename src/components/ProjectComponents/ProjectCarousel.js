import React, {useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProjectCarousel.css'

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

      <img src='./images/carousel-smeco-pic.png' alt='pic-1' className='img-fluid pic-1' />
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


  </Slider>
</div>

    
  )
}

export default ProjectCarousel