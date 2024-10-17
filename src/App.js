import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AdminHome from './pages/admin/app';
import LoginPage from './pages/auth/login';
import UserHome from './pages/user/app';
import VerifierHome from './pages/verifier/app';



const App = () => {
  const userRole = localStorage.getItem('role');

  return (
    <Router>
      <div className="App">        
        <Routes>
          <Route
            path="/admin"
            element={userRole === 'admin' ? <AdminHome /> : <Navigate to="/" />}
          />
          <Route
            path="/user"
            element={userRole === 'loan_user' ? <UserHome /> : <Navigate to="/" />}
          />
          <Route
            path="/verifier"
            element={userRole === 'verifier' ? <VerifierHome /> : <Navigate to="/" />}
          />
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
