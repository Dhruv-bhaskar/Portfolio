import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const SingleProject = ({ name, align, image, link, info, repo }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex flex-col-reverse gap-6 items-center justify-end ${
        align == "left" ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl text-orange">{name}</h2>
        <p className="text-stone-200 text-lg">
          {info}
        </p>
        <div className="mx-auto flex gap-6 px-2 py-1 max-w-[12rem] rounded-lg hover:bg-cyan/20 transition-all duration-500">
          <a
          href={link}
          target="blank"
          className="mx-auto flex gap-2 text-cyan text-lg hover:text-orange transition-all duration-500 cursor-pointer"
        >
          View
          <GoArrowUpRight className="my-auto" />
        </a>
        
        <a
          href={repo}
          target="blank"
          className="mx-auto flex gap-2 text-cyan text-lg hover:text-orange transition-all duration-500 cursor-pointer"
        >
          Code
          <GoArrowUpRight className="my-auto" />
        </a>
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-107 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-lightGrey opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 hidden sm:block"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
