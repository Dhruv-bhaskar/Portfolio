import React from "react";
import { PiHexagonThin } from "react-icons/pi";
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
        className="w-auto max-h-[360px] rounded-full"
      />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
