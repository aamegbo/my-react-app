//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Routes,  Link } from 'react-router-dom';
import MovieList from "./components/MovieList";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';

//const Home = () => <div>Home</div>;
//const MovieList = () => <div>Home Page</div>;
const Movies = () => <div>Movie</div>;
const Cart = () => <div>Cart</div>;
const About = () => <div>About</div>;

function App() {
  
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="Movielist" element={<MovieList />} />
        <Route path="Home" element={<Home/>} />
      </Routes>
    </Router>
    
  );
}

export default App;


/*
<nav>
                <ul>
                    <li><Link to="/">
                        <span class="material-icons">Home</span></Link>
                            </li>

                    <li><Link to="/Movies">
                        <span class="material-icons">Movie</span></Link>
                    </li>
                    
                    <li><Link to="/Cart">
                        <span class="material-icons">Cart</span></Link>                        
                    </li>

                    <li><Link to="/About">
                        <span class="material-icons">About</span></Link>
                    </li>
                </ul>
      </nav>

*/