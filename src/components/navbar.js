import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><a href='/'>My Portfolio</a></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="/achievements">Achievements</a></li>
        <li><a href="/techStack">Tech Stack</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;