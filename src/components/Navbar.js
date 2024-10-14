import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="h">
          <ul>
              <li class="h"><Link to="/Home">Home</Link></li>
              <li class="h"><Link to="/MovieList">MovieList</Link></li>
              <li class="h"><Link to="/Movies">Movies</Link></li>
              <li class="h"><Link to="/Cart">Cart</Link></li>
              <li class="h"><Link to="/About">About</Link></li>
              <input type="text" placeholder='Search...'/>
          </ul>
    </nav>
  );
};

export default Navbar;