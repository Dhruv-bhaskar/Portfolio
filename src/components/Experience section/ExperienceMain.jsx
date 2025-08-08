import React from "react";
import ExperienceText from "./ExperienceText";
import ExperiencePic from "./ExperiencePic";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const ExperienceMain = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id="experience"
      className="mt-28 mx-auto flex flex-col max-x-[1200px]"
    >
      <h2 className="text-5xl md:text-6xl text-cyan">Experience</h2>
      <div className="flex flex-col items-center sm:flex-row sm:justify-around max-w-[1200px]">
        <ExperienceText />
        <ExperiencePic />
      </div>
    </motion.div>
  );
};

export default ExperienceMain;
