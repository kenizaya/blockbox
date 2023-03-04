import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchMovie } from '../features/currentGenreOrCategories'

const Search = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchMovie(query))
  }, [query])

  return (
    <input
      type='text'
      value={query}
      onChange={(e) => {
        setQuery(e.target.value)
      }}
      placeholder='Search'
      className='input input-bordered input-sm w-full max-w-xs text-neutral-focus -mx-96'
    />
  )
}

export default Search
