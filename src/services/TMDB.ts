import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbKey = import.meta.env.VITE_TMDB_KEY
const page = 1

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
      query: () => {
        return `/movie/popular?page=${page}&api_key=${tmdbKey}`
      },
    }),
  }),
})

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi
