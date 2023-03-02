import { tmdbApi } from './../services/TMDB'
import { configureStore } from '@reduxjs/toolkit'
import genreOrCategoryReducer from '../features/currentGenreOrCategories'

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
})
