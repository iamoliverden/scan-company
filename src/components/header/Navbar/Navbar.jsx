import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#">Rates</a>
          <a href="#">FAQ</a>
        </nav>
    );
};

export default Navbar;