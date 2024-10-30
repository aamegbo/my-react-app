import React, { useState, useEffect } from 'react';

const Movies = ({ movieList }) => {

    const [selectedMovie, setSelectedMovie] = React.useState('');

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div>
            <h1>Movies</h1>
            {selectedMovie && <p>You selected: {selectedMovie}</p>}
            <ul>
                {movieList.map((movie, index) => (
                    <li key={index} onClick={() => handleMovieSelect(movie)}>
                        {movie}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;