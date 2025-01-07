import React, { useEffect } from 'react';
import '../css/Home.css'; // Import the CSS file for styling
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import linkedinIcon from '../Images/HomePageImages/linkedin.png'; // Import LinkedIn PNG
import githubIcon from '../Images/HomePageImages/github-sign.png'; // Import GitHub PNG
import CvIcon from '../Images/HomePageImages/cv..png';

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll animation for the text elements
    gsap.utils.toArray('.revealUp').forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: 'back' }
          );
        },
        onLeave: () => {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0 });
        },
        onEnterBack: () => {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: 'back' }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0 });
        },
      });
    });
  }, []);

  return (
    <div className="home-section">
      <div className="text-content">
        <h1 className="greeting revealUp">Hello!</h1>
        <h2 className="name revealUp">I'm Srinivasan S</h2>
        <h2 className="roll revealUp">Full Stack Developer 👨‍💻</h2>
      </div>
      <div  className="greeting revealUp">
      <div className="example-2">
        <ul>
          {/* LinkedIn Icon */}
          <li className="icon-content">
            <a
              href="https://www.linkedin.com/in/srinivasan-s-829575236/"
              target="_blank"
              rel="noopener noreferrer"
              data-social="linkedin"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
              <div className="filled"></div>
            </a>
            <div className="tooltip">LinkedIn</div>
          </li>
          {/* GitHub Icon */}
          <li className="icon-content">
            <a
              href="https://github.com/srinivasan0903"
              target="_blank"
              rel="noopener noreferrer"
              data-social="github"
            >
              <img src={githubIcon} alt="GitHub" />
              <div className="filled"></div>
            </a>
            <div className="tooltip">GitHub</div>
          </li>

          <li className="icon-content">
            <a
              href="https://drive.google.com/file/d/1Z89GrDgkXX1STiwWAzItCBliwP7hsYKn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-social="CvIcon"
            >
              <img src={CvIcon} alt="CvIcon" />
              <div className="filled"></div>
            </a>
            <div className="tooltip">Resume</div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Home;
