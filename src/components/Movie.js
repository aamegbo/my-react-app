import React, { useState} from 'react';
import axios from 'axios';

const Movies = ({ movieList,dropMovie }) => {

    const [selectedMovie, setSelectedMovie] = React.useState('');

    const handleMovieSelect = (movie) => {
        movie?.preventDefault();
        fetchMovies();
        setSelectedMovie(movie);
    };

    const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=1d52587932b3ebb8094c309391ca2799}&query=${selectedMovie}`
          );
          const data = await response.json();
          setSelectedMovie(data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
    
     
    return (
        <div>
            <h1>Movies</h1>
            {selectedMovie && <p>You selected: {selectedMovie}</p>}
            <ul>
                {movieList.map((movie, index) => (
                    <li key={index}>
                        <img
                            //src={'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'}
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}/>
                        <button onClick={() => dropMovie(movie)}>Remove</button>
                        {movie}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;