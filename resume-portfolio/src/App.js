import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex h-screen justify-center items-center font-sans pt-36'>
        <div className='max-w-6xl mx-auto px-4 pt-4'>
          <Routes>
            <Route exact path="/home" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
