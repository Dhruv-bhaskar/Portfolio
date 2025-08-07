import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 mt-10 text-white'>
      <SingleInfo text="dhruvkumarbhaskar599@gmail.com" Image={HiOutlineMail}/>
      <SingleInfo text="9911776865" Image={LuPhone}/>
    </div>
  )
}

export default ContactInfo