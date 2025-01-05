import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Skills.css';

import JavaImage from '../Images/SkillsImages/java.png';
import JavaScriptImage from '../Images/SkillsImages/java-script.png';
import ReactJSImage from '../Images/SkillsImages/react-js.png';
import AppDevelopmentImage from '../Images/SkillsImages/app-development.png';
import SQLImage from '../Images/SkillsImages/sql.png';
import GitHubImage from '../Images/SkillsImages/github.png';
import NodeJSImage from '../Images/SkillsImages/nodejs.png';

const Skills = () => {
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

  const skillImages = [
    { name: 'Java', src: JavaImage },
    { name: 'JavaScript', src: JavaScriptImage },
    { name: 'React JS', src: ReactJSImage },
    { name: 'App Development', src: AppDevelopmentImage },
    { name: 'SQL', src: SQLImage },
    { name: 'GitHub', src: GitHubImage },
    { name: 'NodeJS', src: NodeJSImage },
  ];

  return (
    <section className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      
      {/* Images Section */}
      <div className="skills-images">
        {skillImages.map((skill, index) => (
          <div key={index} className="skills-image-card">
            <img src={skill.src} alt={skill.name} className="skill-image" />
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="card shadow">
        <div className="skills-description">
        <ul>
        <li>
              <span className="skills-bold-text">Technical Expertise:</span> Proficient in Java, JavaScript, React.js, Node.js, and SQL.
            </li>
            <li>
              <span className="skills-bold-text">Full-Stack Development:</span> Expertise in developing end-to-end web and mobile applications with a focus on scalability and user-friendliness.
            </li>
            <li>
              <span className="skills-bold-text">Mobile Application Development:</span> Skilled in React Native and Android Studio for cross-platform mobile app development.
            </li>
            <li>
              <span className="skills-bold-text">Database Management:</span> Proficient in managing databases like MS SQL Server and MySQL.
            </li>
            {/* <li>
              <span className="skills-bold-text">Backend Integration:</span> Hands-on experience in backend development and system integration for robust application architecture.
            </li>
            <li>
              <span className="skills-bold-text">Cross-Platform Development:</span> Expertise in creating solutions that work across multiple platforms.
            </li> */}
            {/* <li>
              <span className="skills-bold-text">Problem-Solving:</span> Adept at creating innovative solutions for real-world challenges.
            </li> */}
            <li>
              <span className="skills-bold-text">Development Tools:</span> Skilled in using tools like GitHub, Visual Studio Code, and IntelliJ IDEA for efficient development and collaboration.
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Skills;
