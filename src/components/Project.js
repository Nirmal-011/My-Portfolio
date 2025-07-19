import React from "react";
import "./Project.css";

const courseProjects = [
  {
    name: "Employee Management System",
    description: "A CRUD application using Spring MVC, Java backend, and Thymeleaf frontend with MySQL database integration.",
    techStack: ["Spring MVC", "Java", "Thymeleaf", "MySQL", "HTML", "CSS"],
    github: "https://github.com/Nirmal-011/Project-Employee-Management-System"
  },
  {
    name: "Ticket Tracker Application",
    description: "A CRUDS application using Spring Boot, Java backend, and Thymeleaf frontend with advanced search functionality.",
    techStack: ["Spring Boot", "Java", "Thymeleaf", "MySQL"],
    github: "https://github.com/Nirmal-011/TicektTrackerApp"
  },
  {
    name: "Todo Management Application",
    description: "A full-stack Todo Application with CRUD operations, completion tracking, and secure API integration.",
    techStack: ["Spring Boot", "ReactJS", "MySQL"],
    github: "https://github.com/Nirmal-011/FullStack-TodoList"
  }
];

const workplaceProjects = [
  {
    name: "Travel App",
    description: "Allows users to book tickets to destinations and find nearby restaurants.",
    techStack: ["React Native", "Firebase", "Google Maps API"],
    github: null, // No GitHub link available
    detailsAvailable: true
  },
  {
    name: "Password Generator App",
    description: "A tool for generating secure passwords.",
    techStack: ["React Native", "JavaScript"],
    github: null, // No GitHub link available
    detailsAvailable: true
  },
  // {
  //   name: "Driving License App",
  //   description: "A real-time project for applying for a license and finding nearby driving schools.",
  //   techStack: ["React Native", "Firebase"],
  //   github: null, // No GitHub link available
  //   detailsAvailable: true
  // },
  {
    name: "Durga Traders",
    description: "An E-commerce website to order water filter and an admin section where they can handle order management",
    techStack:["REact.js", "Firebase" ],
    github:null,
    detailsAvailable:true
  }
];

const Project = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      
      <h3>Course Projects</h3>
      <div className="projects-list">
        {courseProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            </div>
            <div className="project-card-footer">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
      
      <h3>Workplace Projects</h3>
      <div className="projects-list">
        {workplaceProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            </div>
            <div className="project-card-footer">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">View on GitHub</a>
              ) : project.detailsAvailable ? (
                <p className="note">Project details available upon request.</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;