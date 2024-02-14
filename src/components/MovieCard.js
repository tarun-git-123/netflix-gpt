import React from "react";
import { MOVIE_THUMBNAIL } from "../utils/constant";
import { Link } from "react-router-dom";

const MovieCard = ({ info }) => {
  const { poster_path, backdrop_path } = info;
  return (
    <div className="w-[250px] h-[150px] mx-[2px] max-md:w-[200px] max-md:h-[100px]">
      <Link to="/browse">
        <div className="hover:scale-90 hover:transition hover:duration-500 hover:shadow-2xl hover:rounded-md hover:shadow-black">
          <img
            src={MOVIE_THUMBNAIL + backdrop_path}
            alt="movie thumbnail"
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
