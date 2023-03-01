import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Ratings = ({ ratings }) => {
  let hasRated = false
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (ratings - index + 1 < 1) hasRated = true

    return (
      <span key={index} className='text-[#f0b429] text-base'>
        {ratings >= index + 1 ? (
          <BsStarFill />
        ) : ratings >= index - 0.5 && !hasRated ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <div title={ratings} className='flex gap-2'>
      {stars}
    </div>
  )
}

export default Ratings
