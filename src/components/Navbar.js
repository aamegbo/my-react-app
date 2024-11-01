import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';



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

  const saveData = (e) => {
    e.preventDefault();
    // Create an object with username and password
    const userData = { Uname, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    //localStorage.setItem('password', JSON.stringify(password));

    // Clear the input fields
    //setName('');
    //setPassword('');
  };

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