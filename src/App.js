import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles.css';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        {token && <Route path="/dashboard" element={<Dashboard token={token} />} />}
      </Routes>
    </Router>
  );
};

export default App;
