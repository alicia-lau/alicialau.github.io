import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flex h-screen justify-center items-center font-sans pt-36'>
        <div className='max-w-6xl mx-auto px-4 pt-4'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
