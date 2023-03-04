import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbKey = import.meta.env.VITE_TMDB_KEY

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Genre List
    getGenres: builder.query({
      query: () => {
        return `/genre/movie/list?api_key=${tmdbKey}`
      },
    }),

    // Get MOVIES by [TYPE]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          console.log(searchQuery)
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbKey}`
        }

        // Get Movies by Category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'string'
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbKey}`
        }

        // Get Movies by Genre
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'number'
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbKey}`
        }

        // Get Popular Movies
        return `/movie/popular?page=${page}&api_key=${tmdbKey}`
      },
    }),
  }),
})

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi
