import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./page/Home";
import Skills from "./components/Skills";
import TechStack from "./page/TechStack";
import About from "./page/About";
import Achievements from "./page/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/techStack" element={<TechStack/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default App;
