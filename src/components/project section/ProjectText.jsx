import React from "react";

const ProjectText = () => {
  return (
    <div className="flex flex-col mt-[100px]">
      <h2 className="text-5xl md:text-6xl text-cyan mb-10">Projects</h2>
      <p className="text-lg md:text-xl text-center text-white mb-5">
        I have worked on a variety of web development projects, ranging from
        responsive websites to full-stack applications and
        complex front-end interfaces.
      </p>
      <div className="border border-cyan/65 animate-pulse"></div>
    </div>
  );
};

export default ProjectText;
