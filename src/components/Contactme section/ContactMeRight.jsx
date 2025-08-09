import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img src="/email-image.png" alt="mail" className="max-w-[245px] sm:max-w-[280px]" />
        <ContactInfo/>
        <ContactSocial/>
    </div>
  )
}

export default ContactMeRight