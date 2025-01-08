import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Define admin credentials (for demo purposes, use proper backend validation in production)
  const adminEmail = 'admin@gmail.com';
  const adminPassword = '123456'; // In production, don't store plain passwords like this.

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    // Simulated login logic (replace with actual API call)
    try {
      const loginSuccess = email === adminEmail && password === adminPassword;

      if (loginSuccess) {
        // Store admin details in local storage or state
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setUser({ email });

        // Redirect to admin dashboard
        navigate('/admin/dashboard'); // Redirect to admin panel
      } else {
        // Check against user credentials (replace with API logic if needed)
        const userLoginSuccess = true; // Replace with user login logic, e.g., API response check
        if (userLoginSuccess) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          setUser({ email });
          navigate('/travel-details'); // Redirect to user travel details page
        } else {
          alert('Login failed. Please check your credentials.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
  
      
      <div className='login-container'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>If you have any issues, contact support.</p>
      </div>
    
  );
};

export default Login;

