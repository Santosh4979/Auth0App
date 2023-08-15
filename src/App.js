import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/welcome/*" element={<Welcome/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router> 
    </>
  );
};

export default App;
