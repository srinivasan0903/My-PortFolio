import React, { useEffect, useState } from 'react';
import '../css/About.css'; // Import the CSS file for About
import AboutMeImage from '../Images/AboutMe.png'; // Import the image

const About = () => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true); // Trigger shake effect
      setTimeout(() => setIsShaking(false), 500); // Remove shake effect after 500ms
    }, 3000); // Shake every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-heading">
          <h1>About Me 🙋‍♂️</h1>
        </div>
        <div className="about-body">
          <div className="about-image">
            <img src={AboutMeImage} alt="About Me" />
          </div>
          <div className="about-text">
          <p>
            <span className={`emoji ${isShaking ? 'shake' : ''}`}>👋</span> Hi, I'm Srinivasan S, a Full Stack Developer with expertise in Java, React.js, React Native, Android Studio, SQL, and Node.js.{"\n"}
            I have strong knowledge in Full Stack Development,{"\n"}
            building secure, scalable applications.{"\n"}
            With hands-on experience in both mobile and web development,{"\n"}
            I enjoy creating innovative solutions and collaborating with teams.{"\n"}
            I’m proficient in using tools like Git, Visual Studio Code, and IntelliJ IDEA,{"\n"}
            and have a solid foundation in databases like MS SQL Server and MySQL.. 
          </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
