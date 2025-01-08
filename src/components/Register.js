// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Register.css';
// import axios from 'axios';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate(); // useNavigate hook for programmatic navigation

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     try {
//       // Sending registration data to backend
//       const response = await axios.post( `${process.env.REACT_APP_API_URL}/auth/register`, {
//         name,
//         email,
//         password
//       });

//       // If registration is successful, redirect to TravelDetailsForm
//       if (response.status === 201) {
//         alert('Registration successful');
//         navigate('/travel-details'); // Redirect to TravelDetailsForm
//       }
//     } catch (error) {
//       console.error('Error during registration', error);
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form className="register-form" onSubmit={handleRegister}>
//         <label htmlFor="name">Full Name</label>
//         <input
//           type="text"
//           id="name"
//           placeholder="Enter your full name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           placeholder="Confirm your password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="register-button">Register</button>
//       </form>

//       <p>Already have an account? <Link to="/login">Login here</Link></p>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Sending registration data to backend
      const response = await axios.post( `${process.env.REACT_APP_API_URL}/auth/register`, {
        name,
        email,
        password
      });

      // If registration is successful, redirect to TravelDetailsForm
      if (response.status === 201) {
        alert('Registration successful');
        navigate('/travel-details'); // Redirect to TravelDetailsForm
      }
    } catch (error) {
      console.error('Error during registration', error);
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="register-button">Register</button>
      </form>

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Register;
