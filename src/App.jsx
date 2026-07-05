import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="divider" />
      <About />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
