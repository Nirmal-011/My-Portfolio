import React from "react";
import "./Achievements.css";

const achievements = [
  {
    title: "Full Stack Development Certification",
    issuer: "Great Learning Academy",
    year: "2024",
    description: "Completed an intensive course on React, Java, Node.js, and Firebase.",
  }
];

const futureGoals = [
  "Working towards AWS Certified Developer Certification",
  "Planning to complete Advanced React Native Course",
  "Aiming to contribute to an open-source project"
];

const milestones = [
  "Built a React Native app for license applications",
  "Developed a Firebase-integrated authentication system",
  "Completed a major project using Java and React"
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2>Achievements & Certifications</h2>

      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card">
            <h3>{item.title}</h3>
            <p>{item.issuer} - {item.year}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>

      <h2>Future Goals</h2>
      <ul className="goals-list">
        {futureGoals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>

      <h2>Key Milestones</h2>
      <ul className="milestones-list">
        {milestones.map((milestone, index) => (
          <li key={index}>{milestone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
