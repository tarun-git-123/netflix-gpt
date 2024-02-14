import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    useEffect( ()=>{
        getUpcomingMovies();
    },[]);

    const getUpcomingMovies = async()=>{
        const data = await fetch(UPCOMING_MOVIES_API,API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }
}

export default useUpcomingMovies;