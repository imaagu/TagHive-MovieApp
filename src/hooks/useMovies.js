import React, { useState } from "react";
import moviesApi from "../server/movieApi";

const useMovies = () => {
  const [fetchingMovies, setFetchingMovies] = useState(false);
  const [movies, setMovies] = useState(null);
  const [moviesDataAvailable, setMoviesDataAvailable] = useState(false);

  const getMovies = async (params) => {
    try {
      setFetchingMovies(true);
      const data = await moviesApi.fetchingMovies(params);
      console.log("data", data);
      if (data.results.length > 0) {
        setMovies(data);
        setMoviesDataAvailable(true);
      }

      setFetchingMovies(false);
    } catch (e) {
      console.log("Fetching Movies Error ", e);
      setFetchingMovies(false);
    }
  };

  const fetchMovieByTitle = async (title) => {
    try {
      setFetchingMovies(true);
      const data = await moviesApi.fetchMovieByTitle(title);
      console.log("data", data);
      if (data.results.length > 0) {
        setMovies(data);
        setMoviesDataAvailable(true);
      }

      setFetchingMovies(false);
    } catch (e) {
      console.log("Fetching Movies Error ", e);
      setFetchingMovies(false);
    }
  };

  return {
    fetchingMovies,
    movies,
    moviesDataAvailable,
    getMovies,
    fetchMovieByTitle,
  };
};

export default useMovies;
