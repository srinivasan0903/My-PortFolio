import React from 'react';
import '../css/Experience.css'; // Import the CSS file for Experience
import ExperienceImage from '../Images/Experience.jpg'; // Import the image

const Experience = () => {
  return (
    <div className="experience-section">
      {/* Heading for the Experience section */}
      <div className="experience-heading">
        <h1>Experience</h1>
      </div>

      {/* Body of the Experience section */}
      <div className="experience-body">
        {/* Left: Image */}
        <div className="experience-image">
          <img src={ExperienceImage} alt="Experience" />
        </div>

        {/* Right: Content */}
        <div className="experience-content">
              <div className="card-details">
                <p className="compeny-text-title">KleidSys Technologies Private Limited</p>
                <p className="experience-text-title">(Internship: 08th April 2024 – 08th September 2024; Full-time: September 2024 – December 2024)</p>
                <p className="text-body">
                  I have completed my internship from 8th April 2024 to 8th September 2024, focused on mobile application development with React Native and Android Studio.
                </p>
                <p className="text-body">
                  Integrated data seamlessly between web and mobile platforms to ensure smooth functionality. Worked on both mobile applications and web applications to deliver consistent user experiences.
                </p>
                <p className="text-body">
                  Experienced with MySQL Server for database management, including query creation, optimization, and data migration.
                </p>
                <p className="text-body">
                  Successfully resolved issues posted on a daily basis, meeting deadlines and improving app performance.
                </p>
                <p className="text-body">
                  Enhanced expertise in UI development, backend integration, and optimizing performance for scalable and dynamic applications.
                </p>
                <p className="text-body">
                  Played a key role in developing innovative mobile solutions, maintaining high-quality standards across both web and mobile platforms.
                </p>
              </div>
          </div>

      </div>
    </div>
  );
};

export default Experience;
