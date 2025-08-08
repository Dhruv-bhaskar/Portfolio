import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Tailwindcss",
    icon: RiTailwindCssFill,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "Express",
    icon: SiExpress,
  },
  {
    skill: "NodeJS",
    icon: FaNodeJs,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 my-12">
      {skills.map((items, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <items.icon className="text-orange text-7xl" />
            <p className="text-white text-center mt-4">{items.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
