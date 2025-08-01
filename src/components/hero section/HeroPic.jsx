import React from 'react'
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='flex justify-center items-center h-full'>
        <div>
          <img src="/avatar.jpg" alt='photo comes here' className='w-auto max-h-[360px] rounded-full'/>
        </div>
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </div>
  )
}

export default HeroPic