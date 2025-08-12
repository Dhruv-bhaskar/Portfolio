import React from "react";
import ExperienceText from "./ExperienceText";
import ExperiencePic from "./ExperiencePic";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const ExperienceMain = () => {
  return (
    <div id="experience" className="mt-28 mx-auto flex flex-col max-x-[1200px]">
      <h2 className="text-5xl md:text-6xl text-cyan">Experience</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-around max-w-[1200px] gap-15">
        <ExperienceText />
        <ExperiencePic />
      </div>
    </div>
  );
};

export default ExperienceMain;
