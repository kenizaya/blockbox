import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Actors from './pages/Actors'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'
import Movies from './pages/Movies'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='text-3xl font-bold w-[1024px] m-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieInfo />} />
          <Route path='actors' element={<Actors />} />
          <Route path='profile/:profileId' element={<Profile />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
