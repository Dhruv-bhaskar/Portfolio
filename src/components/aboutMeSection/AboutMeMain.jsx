import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'

const AboutMeMain = () => {
  return (
    <div id='about' className='flex flex-col sm:flex-row justify-between items-centre mx-auto max-w-[1200px] gap-12 mt-[100px]'>
        <div>
            <AboutMeText/>
        </div>
       <div className='self-center'>
         <AboutMeImage/>
       </div>
    </div>
  )
}

export default AboutMeMain