import React from 'react'

const SingleInfo = ({text, Image}) => {
  return (
    <div className='flex items-centre justify-start gap-3'>
        <Image className="text-3xl"/>
        <p>{text}</p>
    </div>
  )
}

export default SingleInfo