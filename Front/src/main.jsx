import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import LogReg from "./LogReg.jsx";
import BackEffect from "./BackEffect.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
    <BackEffect/>
   
      <Routes>
        <Route path="/" element={<LogReg />} />
        <Route path="/app" element={<App />} />
      </Routes>
      
      
    </Router>
    
  </StrictMode>
);
