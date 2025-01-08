import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TravelDetailsForm from './components/TravelDetailsForm';
import UserDetails from './components/UserDetails';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          {/* Register Page set as default */}
          <Route path="/" element={<Register />} />
          
          {/* Login page */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          
          {/* Travel details page */}
          <Route path="/travel-details" element={user ? <TravelDetailsForm user={user} /> : <Login setUser={setUser} />} />
          
          {/* User details page */}
          <Route path="/user-details" element={<UserDetails user={user} />} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;




