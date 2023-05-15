import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';
import EducationAndExperience from './components/EducationAndExperience';
import Skills from './components/Skills';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <nav>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/about">O mnie</Link>
            </li>
            <li>
              <Link to="/education-experience">Edukacja i Doświadczenie</Link>
            </li>
            <li>
               <Link to="/skills">Umiejętności</Link>
            </li>
            <li>
              <Link to="/projects">Projekty</Link>
            </li>
             <li>
              <Link to="/contact">Kontakt</Link>
            </li>

          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectCard />} />
          <Route path="/education-experience" element={<EducationAndExperience />} />
          <Route path="/skills" element={<Skills />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
