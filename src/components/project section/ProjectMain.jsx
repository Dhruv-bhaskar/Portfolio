import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Drive",
    align: "right",
    image: "/drive.png",
    link: "",
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
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects">
      <ProjectText />
      <div className="mt-10 flex flex-col gap-7">
        {projects.map((projects, index) => {
          return (
            <SingleProject
              key={index}
              name={projects.name}
              align={projects.align}
              image={projects.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
