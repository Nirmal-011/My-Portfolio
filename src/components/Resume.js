import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <p>Download my resume to learn more about my skills and experience.</p>

      <a href="/assets/Nirmal's Resume.pdf" download className="btn">Download Resume</a>

      {/* Optional: Preview Image of Resume */}
      <div className="resume-preview">
        <iframe src="/assets/Nirmal's Resume.pdf" width="100%" height="500px" title="Resume Preview"></iframe>
      </div>
    </div>
  );
};

export default Resume;
