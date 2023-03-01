import React from 'react'
import { useSelector } from 'react-redux'
import { useGetMoviesQuery } from '../services/TMDB'

const Movies = () => {
  const { data } = useGetMoviesQuery('popular')
  console.log(data)
  return <div>Movies</div>
}

export default Movies
