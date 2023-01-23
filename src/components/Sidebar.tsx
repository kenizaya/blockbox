import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Actors from '../pages/Actors'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import MovieInfo from '../pages/MovieInfo'
import Movies from '../pages/Movies'
import Profile from '../pages/Profile'
import { AiOutlineMenu } from 'react-icons/ai'

interface Category {
  label: string
  value: string
}

const categories = [
  { label: 'popular', value: 'popular' },
  { label: 'top rated', value: 'top_rated' },
  { label: 'upcoming', value: 'upcoming' },
]

const genres = [
  { label: 'action', value: 'action' },
  { label: 'adventure', value: 'adventure' },
  { label: 'animation', value: 'animation' },
  { label: 'comedy', value: 'comedy' },
  { label: 'crime', value: 'crime' },
  { label: 'documentary', value: 'documentary' },
  { label: 'drama', value: 'drama' },
  { label: 'family', value: 'family' },
  { label: 'fantasy', value: 'fantasy' },
  { label: 'history', value: 'history' },
  { label: 'horror', value: 'horror' },
  { label: 'music', value: 'music' },
  { label: 'mystery', value: 'mystery' },
  { label: 'romance', value: 'romance' },
  { label: 'science fiction', value: 'science_fiction' },
  { label: 'tv movie', value: 'tv_movie' },
  { label: 'thriller', value: 'thriller' },
  { label: 'war', value: 'war' },
  { label: 'western', value: 'western' },
]

const Sidebar = () => {
  return (
    <div className='drawer drawer-mobile col-span-1'>
      <input id='sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center'>
        {/* <!-- Page content here --> */}
        <Navbar />
        <main className='text-3xl font-bold sm:ml-72 h-screen w-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movies' element={<Movies />} />
            <Route path='movies/:movieId' element={<MovieInfo />} />
            <Route path='actors' element={<Actors />} />
            <Route path='profile/:profileId' element={<Profile />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        <label
          htmlFor='sidebar'
          className='btn btn-primary drawer-button lg:hidden'
        >
          <div className='hidden'>
            <AiOutlineMenu className='text-white text-lg sm:text-xl' />
          </div>
        </label>
      </div>
      <div className='drawer-side w-64'>
        <label htmlFor='sidebar' className='drawer-overlay'></label>
        <Link
          to='/'
          className='text-5xl cursor-pointer text-gray-900 h-14 flex items-center'
        >
          Blockbox
        </Link>
        <div className='divider' />
        {listCategories(categories)}
        <div className='divider' />
        {listCategories(genres)}
      </div>
    </div>
  )
}

const listCategories = (category: Category[]) => {
  return (
    <ul className='menu p-4 w-64 bg-base-100 text-base-content'>
      {category.map(({ label, value }) => (
        <li key={value} className='capitalize'>
          <Link to={`/movies/${category}/${value}`}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
