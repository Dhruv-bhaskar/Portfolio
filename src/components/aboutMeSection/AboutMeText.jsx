import React from 'react'

const AboutMeText = () => {
  return (
    <div className='sm:mt-19 mt-0 flex flex-col items-centre text-center sm:items-start sm:text-left'>
        <h2 className='text-5xl lg:text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'> I’m Abdelrahman, a web developer instructor with a passion for teaching
        and coding. I specialize in React and front-end development, helping
        students build real-world projects and master modern web technologies. I
        also run a YouTube channel, CodeNest, where I create tutorials and
        courses to guide aspiring developers in their journey toward successful
        careers in tech. Outside of coding, I enjoy continuous learning and
        sharing knowledge to inspire others to achieve their goals.</p>
        <button className='w-[8rem] self-center sm:self-start border border-orange rounded-full px-4 py-2 text-lg text-white mt-10 hover:bg-orange transition-all duration-500 cursor-pointer '>My Projects</button>
    </div>
  )
}

export default AboutMeText