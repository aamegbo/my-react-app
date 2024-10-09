// src/components/MovieList.js
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";

function MovieList() {
  const click = () => {
    alert("Work in progress!!");
  }

  return (
    <button onClick={click}>Help!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MovieList />);


export default MovieList;