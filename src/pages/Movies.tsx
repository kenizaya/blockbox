import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'
import { selectGenreOrCategory } from '../features/currentGenreOrCategories'
import { useGetMoviesQuery } from '../services/TMDB'

const Movies = () => {
  const [page, setPage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state: any) => state.currentGenreOrCategory
  )
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  })

  if (isFetching) return <progress className='progress w-56'></progress>

  if (!data.results.length)
    return (
      <div className='flex items-center mt-5'>
        <h4 className='text-3xl font-semibold'>
          No movies found
          <br />
          Please search for something else
        </h4>
      </div>
    )

  if (error)
    return (
      <div className='flex items-center mt-5'>
        <h4 className='text-3xl font-semibold'>An error has occured</h4>
      </div>
    )

  return (
    <>
      <MovieList movies={data.results} />
    </>
  )
}

export default Movies
