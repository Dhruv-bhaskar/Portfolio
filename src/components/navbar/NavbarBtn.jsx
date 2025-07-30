import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="flex gap-1 px-4 py-2 rounded-full text-lg border-1 border-cyan text-white font-bold bg-gradient-to-r from-cyan-700 to-orange hover:border-orange hover:scale-110 hover:shadow-md shadow-cyan-900 transition-all duration-300">
      Hire Me
      <div className="hidden sm:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
