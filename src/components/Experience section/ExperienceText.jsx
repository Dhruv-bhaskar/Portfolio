import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const ExperienceText = () => {
  return (
    <motion.div 
    variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
    className='mt-15 sm:-translate-y-[2rem]'>
        <h2 className='text-2xl sm:text-[1.5rem] md:text-[1.8rem] text-orange font-semibold'>Full Stack Developer Intern | Cantilever</h2>
        <hr className='text-orange w-[25rem] sm:w-[20rem] md:w-[28rem]'/>
        <p className='text-cyan text-2xl mt-5'>JUNE 2025 - JULY 2025</p>
    </motion.div>
  )
}

export default ExperienceText