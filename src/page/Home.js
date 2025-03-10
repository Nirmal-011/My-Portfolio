import React from 'react';
import './Home.css';




const Home = () => {
  return (
    <div className="home-container">
       
      <div className="home-content">
        <img src='/assets/Nirmal Pic1.jpeg' alt='Picture' className='profile-pic'/>
        <h1>Hi, I'm <span className="name-highlight">Nirmal</span></h1>
        <p className="subtitle">I'm a Java Developer specializing in frontend, backend and mobile apps.</p>
        <a href="#projects" className="btn">View My Work</a>
        <div className="social-icons">
        
        <a href="https://github.com/Nirmal-011" target="_blank" rel="noopener noreferrer">
          <img src='/assets/git.png' alt='GitHub'></img>
        </a>
        <a href="https://www.linkedin.com/in/nirmal-a-2b6343231/" target="_blank" rel="noopener noreferrer">
          <img src='/assets/linkedIn.png' alt='LinkedIn'/>
        </a>
      </div>
      </div>
     
    </div>
  );
};

export default Home;