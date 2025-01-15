import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard.jsx";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <div className="im"></div>
      <h1>CineSearch</h1>
      <h2>The Ultimate Movie Search Experience</h2>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={"data:image/png;base64,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"}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};



export default App;