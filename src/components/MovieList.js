import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies,embed}) => {
    // console.log(movies)
    if(!movies) return
  return (
    <div className={ embed === true ?"text-white pl-14 bg-black":"text-white pl-14 bg-black"}>
        <h1 className='font-medium text-xl ml-5 pt-6 pb-1'>{title}</h1>
        <div className='flex overflow-hidden hover:overflow-x-scroll w-[100%] mt-1'>
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
