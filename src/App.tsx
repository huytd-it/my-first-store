import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Sử dụng component Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;