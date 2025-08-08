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
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";
import { div } from "motion/react-client";

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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 max-w-[1200px mx-auto]">
        {skills.map((items, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `${index * 0.1}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={items.skill}
                imgSvg={<items.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
