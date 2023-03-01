import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {
  return (
    <div className='grid grid-cols-12 overflow-auto'>
      {movies.map((movie, index) => (
        <Movie key={index} index={index} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
