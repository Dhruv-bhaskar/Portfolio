import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-centre sm:text-left">
      <motion.h2 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="text-xl sm:text-2xl uppercase text-cyan">
        Full Stack Web Developer
      </motion.h2>
      <motion.h1 
      variants={fadeIn('right', 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="text-4xl sm:text-[2.5rem] lg:text-5xl font-bold font-special text-orange">
        DHRUV KUMAR BHASKAR
      </motion.h1>
      <motion.p 
      variants={fadeIn('up', 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="text-white text-lg font-bold mt-4">
        Hi, I am a passionate Web Developer
      </motion.p>
    </div>
  );
};

export default HeroText;
