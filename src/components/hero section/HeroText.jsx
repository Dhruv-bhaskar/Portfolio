import React from 'react'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center text-centre sm:text-left'>
        <h2 className='text-xl sm:text-2xl uppercase text-cyan'>Full Stack Web Developer</h2>
        <h1 className='text-4xl sm:text-[2.5rem] lg:text-5xl font-bold font-special text-orange'>DHRUV KUMAR BHASKAR</h1>
        <p className='text-white text-lg font-bold mt-4'>Hi, I am a passionate Web Developer</p>
    </div>
  )
}

export default HeroText