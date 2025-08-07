import React from 'react'
import ContactMeRight from './ContactMeRight'
import ContactMeLeft from './ContactMeLeft'

const ContactMeMain = () => {
  return (
    <div id="contact" className='max-w-[1200px] mt-[110px] mx-auto items-center justify-center px-4'>
        <h2 className='md:text-6xl text-5xl text-cyan mb-10'>Contact Me</h2>
        <div className='flex flex-col md:flex-row justify-between gap-24 p-8 rounded-2xl bg-brown'>
            <ContactMeLeft/>
            <ContactMeRight/>
        </div>
    </div>
  )
}

export default ContactMeMain