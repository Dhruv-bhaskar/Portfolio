import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="sm:mt-19 mt-0 flex flex-col items-centre text-center sm:items-start sm:text-left">
      <h2 className="text-5xl lg:text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white text-lg sm:text-xl">
        Full-stack MERN web developer with a passion
        for building robust and scalable applications. I specialize in the MERN
        stack (MongoDB, Express.js, React, and Node.js), and I enjoy creating
        dynamic, user-friendly experiences. I am a continuous learner, always
        striving to improve my skills and stay updated with the latest
        technologies. I am confident in my ability to develop innovative
        solutions and contribute to successful projects.
      </p>

      <div className="flex items-center justify-center gap-5">
        <Link to="projects" smooth={true} spy={true} duration={500} offset={-145}>
        <button className="w-[8rem] self-center sm:self-start border border-orange rounded-full px-4 py-2 text-lg text-white mt-10 hover:bg-orange transition-all duration-500 cursor-pointer ">
          My Projects
        </button>
      </Link>
      <a href="https://drive.google.com/file/d/19N_z0mDi_EzN4oMIcNguz1RVrGr2ZWai/view?usp=sharing" target="_blank">
        <button className="w-[8rem] self-center sm:self-start border border-orange rounded-full px-4 py-2 text-lg text-white mt-10 hover:bg-orange transition-all duration-500 cursor-pointer ">
          Resume
        </button>
      </a>
      </div>
    </div>
  );
};

export default AboutMeText;
