import React, { useState, useEffect } from "react";
import {API} from "../../api/API";
import MovieInfo from "./MovieInfo";

export const MovieInfoContainer = ({selectedMovie, setSelectedMovie}) => {
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    API.getMovieDetails(selectedMovie)
        .then((data) => {
          setMovieInfo(data);
        });
  }, [selectedMovie]);

  return (
      <div>
        <MovieInfo setSelectedMovie={setSelectedMovie}
                   movieInfo={movieInfo}/>
      </div>
  );
};
