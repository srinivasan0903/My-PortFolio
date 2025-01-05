import React from 'react';
import '../css/Header.css'; // Import the CSS file for Header

// Importing icons
// import HomeIcon from '../Images/HeadeImages/HomeIcon.png';
// import AboutIcon from '../Images/HeadeImages/AboutIcon.png';
// import SkillsIcon from '../Images/HeadeImages/SkillsIcon.png';
// import ExperienceIcon from '../Images/HeadeImages/ExperienceIcon.png';
// import ProjectIcon from '../Images/HeadeImages/ProjectIcons.png';
// import EducationIcon from '../Images/HeadeImages/EducationIcon.png';
// import ContactIcon from '../Images/HeadeImages/ContactIcon.png';
// import Logo from '../Images/HeadeImages/Logo.png';

const Header = ({ scrollToSection }) => {
  return (
    <header>
      <nav className="header-container">
        <div className="logo-container">
          <span className="logo-text">Srinivasan S</span>
        </div>

        {/* <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div> */}
        <ul className="nav-list">
          <li>
            <button onClick={() => scrollToSection('home')}>
              {/* <img src={HomeIcon} alt="Home" className="nav-icon" /> */}
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>
              {/* <img src={AboutIcon} alt="About" className="nav-icon" /> */}
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>
              {/* <img src={SkillsIcon} alt="Skills" className="nav-icon" /> */}
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('experience')}>
              {/* <img src={ExperienceIcon} alt="Experience" className="nav-icon" /> */}
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>
              {/* <img src={ProjectIcon} alt="Projects" className="nav-icon" /> */}
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('education')}>
              {/* <img src={EducationIcon} alt="Education" className="nav-icon" /> */}
              Education
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>
              {/* <img src={ContactIcon} alt="Contact" className="nav-icon" /> */}
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
