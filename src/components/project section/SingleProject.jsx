import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const SingleProject = ({ name, align, image, link }) => {
  return (
    <div className={`flex flex-col-reverse gap-6 items-center justify-end ${align == "left" ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
      <div>
        <h2 className="text-2xl sm:text-3xl text-orange">{name}</h2>
        <a
          href={link}
          className={`flex gap-2 items-center text-cyan text-lg hover:text-orange transition-all duration-500 justify-self-center cursor-pointer ${align === "left" ? "sm:justify-self-end" : "sm:justify-self-start"}`}
        >
          View
          <GoArrowUpRight className="mx-auto" />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-107 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-lightGrey opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 hidden sm:block"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SingleProject;
