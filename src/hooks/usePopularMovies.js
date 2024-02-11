import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, POLULAR_MOVIES_API } from "../utils/constant";

const usePopularMovies = () => {
  // fetch data fromTMDB API and update store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(POLULAR_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
