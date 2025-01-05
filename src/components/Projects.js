import React, { useState } from 'react';
import '../css/Projects.css'; // Import the CSS file for Projects
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons for navigation

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Sales Price Prediction with Customer Segmentation",
      description: [
        "This project is designed to accurately determine the sales price for products based on data analysis and forecasting techniques.",
        "Utilized historical sales data, customer demographics, and purchasing behavior to predict optimal pricing strategies for maximizing revenue.",
        "Implemented the K-means clustering algorithm to segment customers based on purchasing behavior, demographics, and order patterns for enhanced marketing strategies.",
        "Utilized Python libraries such as Pandas, Scikit-learn, Matplotlib, and Prophet to perform data analysis and generate predictive models.",
        "Integrated interactive charts and visualizations using Power BI, providing clear and actionable sales forecasts.",
        "Created a chatbot that leverages customer reviews and sales predictions to recommend products and assist in the purchasing process.",
        "Built a robust web application using React JS, Flask, Prophet, and Power BI, ensuring ease of use and reliability.",
        "As the Frontend Developer, optimized the user interface for responsiveness, performance, and cross-browser compatibility, specifically targeting web view.",
        "Collaborated with the backend team to ensure efficient data integration and precise visualization of insights within the web application."
    ],
    
      buttonLabel: "GitHub Repository 🚀",
      buttonLink: "https://github.com/srinivasan0903/Sales_price_Prediction_with_Customer-Segmentation",
      image: require('../Images/ProjectImages/SalesImage.jpg'),
    },
    {
      title: "Fake Number Plate Recognition System using Yolo V8",
      description: [
          "Designed and implemented a high-performance, real-time system to detect fake vehicle number plates using the YOLO v8 object detection algorithm.",
          "Developed the frontend using React.js to create an interactive UI that displays real-time results of the detection system.",
          "Implemented the backend with Python and Flask to process video feeds, detect fraudulent plates, and send results to the frontend.",
          "Optimized the system for real-time processing, ensuring swift detection without compromising accuracy, leveraging Flask APIs for efficient data exchange.",
          "Integrated advanced deep learning techniques for precise recognition, ensuring high accuracy in varying lighting and environmental conditions.",
          "Conducted extensive testing to fine-tune the YOLO v8 model and Flask-based API for high precision and recall metrics.",
          "Collaborated with stakeholders to ensure the system was tailored to real-world law enforcement scenarios, ensuring ease of use and practical applicability.",
          "Implemented real-time alerts and notifications for law enforcement users to improve response times and operational efficiency."
    ],
    
      buttonLabel: "GitHub Repository 🚀",
      buttonLink: "https://github.com/srinivasan0903/Automatic-number-plate-recognization-using-yolo-v8",
      image: require('../Images/ProjectImages/FakeNumberImage.jpg'),
    },
    {
      title: "Notes App",
      description: [
            "Built a mobile application using Android Studio with CRUD capabilities, enabling users to seamlessly manage their notes on Android devices.",
            "The app allows users to efficiently manage their notes, with features for creating, viewing, updating, and deleting entries. Users can categorize and search through their notes easily.",
            "Designed with an intuitive and responsive UI/UX, ensuring a smooth experience across various Android devices. The layout is user-friendly and makes it easy for users to organize and manage their notes.",
            "Synced data storage using Firebase, ensuring real-time updates. Users can access their notes from their Android devices with automatic syncing.",
            "Implemented offline capabilities, allowing users to create and edit notes without an internet connection, syncing with the Firebase database once connectivity is restored.",
            "Integrated push notifications to remind users of important notes, improving productivity and keeping users engaged with the app.",
            "Incorporated Firebase Authentication for secure login and user-specific note storage with customizable profiles.",
            "Optimized the app for performance and different Android screen sizes, ensuring smooth transitions, fast loading times, and a seamless experience on smartphones and tablets."
            ],
    
      buttonLabel: "GitHub Repository 🚀",
      buttonLink: "https://github.com/srinivasan0903/notes-app",
      image: require('../Images/ProjectImages/NotesAppImage.jpg'),
    },
  ];

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="projects-section">
      <div className="projects-content">
        <h1 className="projects-title">Projects</h1>

        {/* Image positioned above the content and below the heading */}
        <div className="projects-image">
          <img src={projects[currentProject].image} alt={projects[currentProject].title} />
        </div>

        <div className="project-navigation">
          <button className="nav-button" onClick={handlePrevious}>
            <FaArrowLeft style={{ color: 'blue', fontSize: '30px' }} />
          </button>
          
          <div className="project-item">
            <h3 className="project-item-title">{projects[currentProject].title}</h3>
            <ul className="project-item-description">
              {projects[currentProject].description.map((point, index) => (
                <li className='' key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <button className="nav-button" onClick={handleNext}>
            <FaArrowRight style={{ color: 'blue', fontSize: '30px' }} />
          </button>
        </div>

        <div className="project-buttons">
          <button
            className="project-button"
            onClick={() => window.open(projects[currentProject].buttonLink, "_blank")}
          >
            {projects[currentProject].buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
