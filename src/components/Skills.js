import React from 'react';
import "./Skills.css";

const Skills = () => {
  const skills = [
    {name:'Java', level:'90%'},
    {name:'HTML', level:'90%'},
    {name:'CSS', level:'90%'},
    {name:'JavaScript', level:'85%'},
    {name:'React', level:'85%'},
    {name:'React Native', level:'80%'},
    {name:'MySQL', level:'75%'},
    {name:'SpringBoot', level:'75%'},
    {name:'Firebase', level:'70%'},
    {name:'Node.js', level:'70%'},
  ];

  return (
    <div id="skills" className='skills-container'>
      <div className="skills-content">
        <h2 className="section-title">Professional Skills</h2>
        <div className='skills-list'>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-fill" 
                  style={{ 
                    width: skill.level, 
                    animationDelay: `${index * 0.1}s` 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;