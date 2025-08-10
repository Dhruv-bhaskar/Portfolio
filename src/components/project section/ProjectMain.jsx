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
    info: "A cloud storage platform for image uploads. This project features user authentication and authorization with a secure login system, allowing users to privately store and manage their image files.",
    repo: "https://github.com/Dhruv-bhaskar/Drive.git"
  },
  {
    name: "Bloggish",
    align: "left",
    image: "/bloggish.png",
    link: "https://blog-website-one-rust.vercel.app/",
    info: "A full-featured blog website where users can create, read, update, and delete their blog posts. It includes a complete login/logout system, giving users control over their content.",
    repo: "https://github.com/Dhruv-bhaskar/blog-website.git"
  },
  {
    name: "Taskify",
    align: "right",
    image: "/taskify.png",
    link: "https://task-management-opal-nu.vercel.app/",
    info: "A comprehensive task management application. Users can perform full CRUD operations on their tasks, manage their accounts with login/logout functionality, and sort tasks by date, title, or view them based on their completion status.",
    repo: "https://github.com/Dhruv-bhaskar/Task-management.git"
  },
  {
    name: "StudySync",
    align: "left",
    image: "/studysync.png",
    link: "https://study-sync-lake.vercel.app/",
    info: "A front-end project built using only HTML, CSS, and JavaScript. It demonstrates fundamental web development skills and a clean, user-friendly interface.",
    repo: "https://github.com/Dhruv-bhaskar/Study-sync.git"
  },
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
      <div className="mt-10 flex flex-col gap-10">
        {projects.map((projects, index) => {
          return (
            <SingleProject
              key={index}
              name={projects.name}
              align={projects.align}
              image={projects.image}
              link={projects.link}
              info={projects.info}
              repo={projects.repo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
