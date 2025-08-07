import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import SingleContactSocial from './SingleContactSocial'

const ContactSocial = () => {
  return (
    <div className='flex gap-4 mt-8'>
        <SingleContactSocial Icon={IoLogoGithub} link="https://github.com/Dhruv-bhaskar"/>
        <SingleContactSocial Icon={FaLinkedin} link="https://www.linkedin.com/in/dhruv-kumar-4206b0274/"/>
    </div>
  )
}

export default ContactSocial