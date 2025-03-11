import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* About Section */}
      <div className="about-content">
        <img src="/assets/Nirmal Pic.jpg" alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <span className="highlight">Nirmal</span>, a passionate Java Developer 
            specializing in frontend, backend, and mobile app development. I love building 
            scalable applications and solving complex problems with clean and efficient code.
          </p>
          <p>
            I have experience working with React, React Native, Firebase, and Java.
            My goal is to create intuitive and performant applications that provide 
            excellent user experiences.
          </p>
        </div>
      </div>
      
      {/* Timeline Section */}
      <h2 className="timeline-title">Experience & Education</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {/* Work Experience */}
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <span className="timeline-tag work">Work</span>
              <span className="timeline-date">2025 - Present</span>
            </div>
            <h3 className="timeline-title-item">Java Developer Associate </h3>
            <h4 className="timeline-subtitle">VSoft Solutions.</h4>
            <p className="timeline-description">Working on Java, React Native, and Firebase to build scalable applications.</p>
          </div>
        </div>
        
        {/* Education - Course */}
        <div className="timeline-item right">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <span className="timeline-tag education">Education</span>
              <span className="timeline-date">2024</span>
            </div>
            <h3 className="timeline-title-item">Full Stack Development Course</h3>
            <h4 className="timeline-subtitle">Great Learning Academy</h4>
            <p className="timeline-description">Learned React, Java, Node.js, Spring Boot and database management.</p>
          </div>
        </div>
        
        {/* Education - Degree */}
        <div className="timeline-item left">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <span className="timeline-tag education">Education</span>
              <span className="timeline-date">2020 - 2024</span>
            </div>
            <h3 className="timeline-title-item">Bachelor's Degree in Electrical and Electronics Engineering</h3>
            <h4 className="timeline-subtitle">Francis Xavier Engineering college</h4>
            <p className="timeline-description">Although I'm on a different platform, my passion for programming never ends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;