import React from "react";
import "./Resume.css"
const Resume = () => {
  return (
    <div className="resume-container">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-description">
        Download my resume to learn more about my skills and experience.
      </p>
      
      <a href="/assets/Nirmal's Resume.pdf" download className="download-btn">
        Download Resume
      </a>
      
      {/* Resume Preview */}
      <div className="resume-preview">
        <iframe 
          src="/assets/Nirmal's Resume.pdf" 
          width="100%" 
          height="500px" 
          title="Resume Preview"
          className="resume-iframe"
        />
      </div>
    </div>
  );
};
export default Resume;