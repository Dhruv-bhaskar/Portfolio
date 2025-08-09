import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer motion/variants";

const projects = [
  {
    name: "Drive",
    align: "right",
    image: "/drive.png",
    link: "https://drive-ca34.onrender.com/",
  },
  {
    name: "Bloggish",
    align: "left",
    image: "/bloggish.png",
    link: "https://blog-website-one-rust.vercel.app/",
  },
  {
    name: "Taskify",
    align: "right",
    image: "/taskify.png",
    link: "https://task-management-opal-nu.vercel.app/",
  },
  {
    name: "StudySync",
    align: "left",
    image: "/studysync.png",
    link: "https://study-sync-lake.vercel.app/",
  }
];

const ProjectMain = () => {
  return (
    <div id="projects">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="mt-10 flex flex-col gap-7">
        {projects.map((projects, index) => {
          return (
            <SingleProject
              key={index}
              name={projects.name}
              align={projects.align}
              image={projects.image}
              link={projects.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
