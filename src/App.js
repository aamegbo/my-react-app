//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieList from './components/MovieList';
import Subscriptions from './components/Data';
import "./App.css";
import Navbar from './components/Navbar';
import About from './components/About';
import Cart from './components/Cart';
import Movie from './components/Movie';

const App = () => {
  const [movie, setMovies] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  

  const HandleAddMovie = (movie) => {
      setMovies((prevMovies) => [...prevMovies, movie]);
  };

  //Adding items to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  //Removing items in cart
  const handleRemoveFromCart = (itemToRemove) => {
      setCartItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
  };



  //Routes all components to their import files
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="Movielist" element={<MovieList onAddMovie={HandleAddMovie} onAddToCart={handleAddToCart}/> } />
        <Route path="About" element={<About />} />
        <Route path="Movies" element={<Movie movieList={movie} handleMovieSelect/>} />
        <Route path="Cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />} />
      </Routes>
      <h2 className= 'Subscriptions'>Available Subscriptions</h2>
        {Subscriptions.map((item) => (
          <div key={item.id}>
            <span className='Subscriptions'>{item.name}</span>
            <span>Price: ${item.price}</span>
            <button className='Subscriptions' onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
          </div>
        ))}
    </Router>
    
  );
}

export default App;
