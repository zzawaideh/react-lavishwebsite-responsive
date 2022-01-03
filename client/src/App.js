import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Services from './pages/services';

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path='/' element={<Home />} />

        <Route exact path='/services' element={<Services />} />
        
      </Routes>
    </Router>
  );
}

export default App;
