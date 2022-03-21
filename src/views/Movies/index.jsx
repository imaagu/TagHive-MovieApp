import React, { useEffect } from "react";
import { useMovies, useAuth } from "../../hooks";
import { CardList, NavBar } from "../../components";
import { useHistory } from "react-router-dom";
import SearchBar from "./searchBar";
const Movies = () => {
  const { userDetails, userDetailsAvailable } = useAuth();
  const {
    fetchingMovies,
    movies,
    moviesDataAvailable,
    getMovies,
    fetchMovieByTitle,
  } = useMovies();
  const history = useHistory();

  useEffect(() => {
    if (userDetailsAvailable) {
      if (userDetails.havepreference) {
        getMovies(userDetails.preference);
      } else {
        history.push("/preference");
      }
    }
  }, [userDetails]);

  return (
    <div>
      <NavBar isUserActive={userDetailsAvailable} />
      <div className="p-8 mb-16">
        <h1 className="text-4xl font-bold text-center ">Movies</h1>
        <SearchBar onSearch={fetchMovieByTitle} />
        <CardList
          loader={fetchingMovies}
          data={movies}
          dataAvailabe={moviesDataAvailable}
        />
      </div>
    </div>
  );
};

export default Movies;
