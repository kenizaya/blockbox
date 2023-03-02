import React from 'react'
import { Link } from 'react-router-dom'
import Ratings from './Ratings'

const Movie = ({ movie, index }) => {
  return (
    <div className='p-5 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col'>
      <Link
        to={`/movie/${movie.id}`}
        className='font-semibold hover:cursor-pointer text-none'
      >
        {movie.poster_path ? (
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className='rounded h-72 hover:scale-105 ease-in duration-75'
          />
        ) : (
          <img
            alt={movie.title}
            src='https://via.placeholder.com/500x750'
            className='rounded h-72 hover:scale-105 ease-in duration-75'
          />
        )}
        <h5 className='text-ellipsis text-xl w-60 whitespace-nowrap overflow-hidden mt-2 mb-0 text-left'>
          {movie.title}
        </h5>
        <Ratings ratings={movie.vote_average / 2} />
      </Link>
    </div>
  )
}

export default Movie
