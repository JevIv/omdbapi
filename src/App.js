import React, { useState} from "react";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import Header from "./components/Header/Header";
import {API} from "./api/API";
import {MovieInfoContainer} from "./components/MovieInfo/MovieInfoContainer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [plots, setPlots] = useState([]);
  const [timeoutId, updateTimeoutId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchData = (searchString) => {
    API.searchMoviesByTitle(searchString)
      .then((data) => {
        setMovies(data.Search)
      });
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    setSearch(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <>
      <Header movies={movies} onTextChange={onTextChange} />
      {selectedMovie && (
        <MovieInfoContainer
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
      <MovieList
        plots={plots}
        movies={movies}
        setSelectedMovie={setSelectedMovie}
      />
    </>
  );
};

export default App;
