import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, POLULAR_MOVIES_API } from "../utils/constant";

const useTopRatedMovies = () => {
  // fetch data fromTMDB API and update store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(POLULAR_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
