// src/components/StreamList.js 
import React, { useState } from 'react';



const MovieList = ({ onAddMovie, onAddToCart }) => {
    const [input, setInput] = useState('');
    const [streamList, setMovieList] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    //This function handles the changes in the movie list
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            const updatedList = [...streamList, input];
            setMovieList(updatedList);
            setInput('');
        }
    };

    //Prompts the user on what is picked
    const handleItemClick = (item) => {
        setSelectedEvent(`You selected: "${item}"`);
    };

    const handleAddToMovies = (movie) => {
        onAddMovie(movie);
        setSelectedEvent(`Added "${movie}" to Movies!`);
    };

    const handleAddToCart = (item) => {
        onAddToCart(item);
        setSelectedEvent(`Added "${item}" to Cart!`);
    };

    return (
        <div className="column.all">
            <h1>Your Streaming List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter movie title"
                    required
                />
                <button type="submit">Add to List</button>
            </form>

            {selectedEvent && <div className="event-message">{selectedEvent}</div>}

            <ul>
                {streamList.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(item)}>
                        {item}
                        <button onClick={() => handleAddToMovies(item)}>Add to Movies</button>
                        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>           
        </div>
    );
};

export default MovieList;