import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Actors from './pages/Actors'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import MovieInfo from './pages/MovieInfo'
import Movies from './pages/Movies'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <div className='grid'>
        <Sidebar />
      </div>
    </>
  )
}

export default App
