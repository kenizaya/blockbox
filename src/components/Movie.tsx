import React from 'react'

const Movie = ({ movie, index }) => {
  return (
    <div className='p-2 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2'>
      <h5 className='text-ellipsis text-xl w-60 whitespace-nowrap overflow-hidden mt-2 mb-0 text-center'>
        {movie.title}
      </h5>
    </div>
  )
}

export default Movie
