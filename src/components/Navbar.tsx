import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 h-14 w-full flex items-center justify-around'>
      <AiOutlineMenu className='sm:hidden text-white text-lg sm:text-xl' />
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
