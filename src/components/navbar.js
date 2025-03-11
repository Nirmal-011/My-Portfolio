import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href='/'>My Portfolio</a>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isOpen ? 'active' : ''}`}></div>
      </div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/" onClick={toggleMenu}>Home</a></li>
        <li><a href="/about" onClick={toggleMenu}>About</a></li>
        <li><a href="/skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="/projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="/achievements" onClick={toggleMenu}>Achievements</a></li>
        <li><a href="/techStack" onClick={toggleMenu}>Tech Stack</a></li>
        <li><a href="/resume" onClick={toggleMenu}>Resume</a></li>
        <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;