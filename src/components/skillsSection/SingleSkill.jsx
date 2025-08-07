import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan p-3 size-[5.2rem] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white text-[0.8rem] font-bold">{text}</p>
      </div>
      <div className="border w-[83px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
