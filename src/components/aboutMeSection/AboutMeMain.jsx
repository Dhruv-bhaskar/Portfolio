import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col sm:flex-row justify-between items-centre mx-auto max-w-[1200px] gap-12 mt-[100px]"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="self-center"
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
