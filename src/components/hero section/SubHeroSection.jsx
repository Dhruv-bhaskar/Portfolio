import React from 'react'

const SubHeroSection = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row items-center justify-around gap-4 border-y border-lightGrey text-lightGrey text-4xl sm:text-2xl lg:text-3xl py-6'>
        <p className='hidden sm:block'>Fast Learner</p>
        <p  className='hidden sm:block'>Team Work</p>
        <p>Details Master</p>
    </div>
  )
}

export default SubHeroSection