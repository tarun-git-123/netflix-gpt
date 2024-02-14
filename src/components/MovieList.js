import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies,embed}) => {
    // console.log(movies)
    if(!movies) return
  return (
    <div className={ embed === true ?"text-white pl-14 bg-black pb-5":"text-white pl-14 bg-black pb-5"}>
        <h1 className='font-medium text-xl ml-5 pt-6 pb-1'>{title}</h1>
        <div className='flex overflow-x-scroll w-[100%] mt-1'>
            <div className='flex'>
                {
                    movies.map( (movie)=> <MovieCard key={movie.id} info={movie}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList
