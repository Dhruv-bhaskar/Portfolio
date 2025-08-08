import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex justify-center items-center h-full"
    >
      <img
        src="/avatar.jpg"
        alt="photo comes here"
        className="w-auto max-h-[360px] rounded-full mt-5 sm:mt-0"
      />

    </motion.div>
  );
};

export default HeroPic;
