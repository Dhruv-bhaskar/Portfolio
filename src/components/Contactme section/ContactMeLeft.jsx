import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col md:items-start w-full'>
        <h2 className='text-3xl text-orange mb-4'>Get In Touch</h2>
        <p className='md:text-start text-white'> Feel free to reach out if you’d like to collaborate
        <br />
        you are just a few clicks away!</p>

        <div className='w-full'>
            <ContactForm/>
        </div>
    </div>
  )
}

export default ContactMeLeft