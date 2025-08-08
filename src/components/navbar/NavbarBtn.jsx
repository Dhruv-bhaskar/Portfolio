import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link to="contact" smooth={true} spy={true} duration={500} offset={-145}>
      <button className="flex gap-1 px-4 py-2 rounded-full text-lg border-1 border-cyan text-white font-bold bg-gradient-to-r from-cyan-700 to-orange hover:border-orange hover:scale-110 hover:shadow-md shadow-cyan-900 transition-all duration-300">
        Hire Me
        <div className="hidden sm:block">
          <LuArrowDownRight />
        </div>
      </button>
    </Link>
  );
};

export default NavbarBtn;
