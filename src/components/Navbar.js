import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">MovieList</Link></li>
        <li><Link to="/about">Movies</Link></li>
        <li><Link to="/contact">Cart</Link></li>
        <li><Link to="/contact">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;