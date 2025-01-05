import React from 'react';
// import educationImage from '../Images/Educations.png';
import '../css/Education.css';


const EducationSection = () => {
  return (
    <div className="education-container">
      <div className="heading-container">
        <h2 className="education-title">Education 🎓</h2>
      </div>
      <div className="education-content">
        {/* <img src={educationImage} alt="Education" className="education-image" /> */}
        <div className="education-card">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3 className="education-heading">College Details</h3>
                <p className="education-details">B.Tech in Information Technology</p>
                <p className="education-date">Sona College of Technology (2020 – 2024)</p>
                <p className="education-date">CGPA: 8.10</p>
                {/* <p className="education-date">Sona College of Technology (2020 – 2024)</p> */}
                {/* <a href="#" className="view-more">View More →</a> */}
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3 className="education-heading">12th Details</h3>
                <p className="education-details">Sri Vidya Mandir Senior Secondary School, Salem (2019 – 2020)</p>
                <p className="education-date">Percentage: 61%</p>
                {/* <a href="#" className="view-more">View More →</a> */}
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3 className="education-heading">10th Details</h3>
                <p className="education-details">Sri Vidya Mandir Senior Secondary School, Salem (2017 – 2018)</p>
                <p className="education-date">Percentage: 54%</p>
                {/* <a href="#" className="view-more">View More →</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
