import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="lg:mx-14 flex flex-col lg:flex-row lg:gap-0 gap-6 text-white text-lg lg:text-[1.1rem] absolute lg:top-5 top-[120px] left-[50%] -translate-x-[50%] bg-cyan/30 lg:bg-black w-full lg:w-[31rem] backdrop-blur-lg py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group lg:w-[10rem]">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-145}
              className="text-white hover:text-cyan transition-all duration-500 cursor-pointer"
            >
              {link.link}
            </Link>
            <div className="mx-auto w-0 bg-cyan group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
