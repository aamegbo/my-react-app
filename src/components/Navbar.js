import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="topnav">
      <ul>
        <li class="topnav active"><Link to="/MovieList">MovieList</Link></li>
        <li class="topnav"><Link to="/Movies">Movies</Link></li>
        <li class="topnav"><Link to="/Cart">Cart</Link></li>
        <li class="topnav"><Link to="/About">About</Link></li>
        <form action="/action_page.php" class="login-container">
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Password" name="password" />
                <button type="submit">Login</button>
            </form>
      </ul>
    </div>
  );
};

export default Navbar;