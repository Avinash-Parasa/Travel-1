import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">
            BookHere.com
          </Link>
        </li>
        <li>
          <Link to="/user-details">
            <i className="fa fa-tachometer" aria-hidden="true"></i>
            Your Details
          </Link>
        </li>
        <li>
          <Link to="/travel-details">
            <i className="fa fa-tachometer" aria-hidden="true"></i>
              Travel
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fa fa-user" aria-hidden="true"></i>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
