import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='main-container flex justify-center items-center font-sans pt-160'>
        <div className='max-w-6xl mx-auto px-4 pt-4'>
          <LandingPage />

          <div id="about" className='my-8'>
            <About />
          </div>
          <div id="projects" className='my-8'>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
