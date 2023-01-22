import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 h-14 w-full flex items-center justify-between pr-5 col-span-4'>
      <input
        type='text'
        placeholder='Search'
        className='input-xs sm:input-sm sm:w-full input-bordered w-7/12 text-white max-w-xs bg-gray-700 rounded-lg'
      />
      <span className='text-white flex items-center gap-2 sm:text-xl cursor-pointer'>
        Login <CgProfile className='text-lg sm:text-xl' />
      </span>
    </nav>
  )
}

export default Navbar
