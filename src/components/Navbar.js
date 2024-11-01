'use client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const [Uname, setName] = useState('');
  const [password, setPassword] = useState('');

  // maintain an array of current Usernames
  const addUname = (Unames) => {
    setName([...Uname, Unames]);
  };

  // maintain an array of current passwords
  const addPassword = (passwords) => {
    setName([...password, passwords]);
  };

  //This is a function to save user information
  const saveData = (e) => {
    e.preventDefault();
    // Create an object with username and password
    const userData = { Uname, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Clear the input fields
    //setName('');
    //setPassword('');
  };

  //Represents the Navbar and login feature
  //User Persists after entry in localStorage
  return (
    <div class="topnav">
      <ul>
        <li class="topnav active"><Link to="/MovieList">MovieList</Link></li>
        <li class="topnav"><Link to="/Movies">Movies</Link></li>
        <li class="topnav"><Link to="/Cart">Cart</Link></li>
        <li class="topnav"><Link to="/About">About</Link></li>
        <form action="/action_page.php" class="login-container" onSubmit={saveData}>
          <input type="text" placeholder="Username"
          value={Uname} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
      </ul>
    </div>
  );
};

export default Navbar;