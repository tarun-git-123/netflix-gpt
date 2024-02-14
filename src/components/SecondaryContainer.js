import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
  return (
    <div className="mt-[-12%] z-100 relative w-full">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} embed={true}/>
      <MovieList title={"Popular"} movies={movies.popularMovies} embed={false}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} embed={false}/>
      <MovieList title={"Trending Now"} movies={movies.upcomingMovies} embed={false}/>
    </div>
  );
};

export default SecondaryContainer;
