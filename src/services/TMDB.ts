import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tmdbKey = import.meta.env.VITE_TMDB_KEY
const page = 1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get MOVIES by [TYPE]
    getMovies: builder.query({
      query: () => {
        return `/movie/popular?page=${page}&api_key=${tmdbKey}`
      },
    }),
  }),
})

export const { useGetMoviesQuery } = tmdbApi
