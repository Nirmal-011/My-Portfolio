import React from 'react';
import "./TechStack.css";

const TechStack = () => {
  const techs = [
    {name: "Java", imgUrl: "/assets/Java.png"},
    {name: "React", imgUrl: "/assets/react-native.png"},
    {name: "React Native", imgUrl: "/assets/react-native.png"},
    {name: "NodeJs", imgUrl: "/assets/nodejs.png"},
    {name: "Firebase", imgUrl: "/assets/firebase.png"},
  ];

  return (
    <div id="techstack" className='tech-stack-container'>
      <div className="tech-stack-header">
        <h2 className="section-heading">My Tech Stack</h2>
        <div className="heading-underline"></div>
      </div>
      <div className='tech-cards'>
        {techs.map((tech, index) => (
          <div key={index} className='tech-card'>
            <div className="tech-image-wrapper">
              <img src={tech.imgUrl} alt={tech.name} className="tech-image"/>
            </div>
            <div className="tech-label">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;