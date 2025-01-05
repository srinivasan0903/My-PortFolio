import React from 'react';
import './App.css';
import About from './components/About';       // Ensure this matches the export in About.js
import Skills from './components/Skills';     // Same for Skills.js
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';         // Ensure correct export here as well

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
