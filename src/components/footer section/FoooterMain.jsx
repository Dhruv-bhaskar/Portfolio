import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FoooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="hidden sm:flex justify-between max-w-[1200px] mx-auto mt-4">
        <p className="text-3xl text-lightGrey">Dhruv Kumar Bhaskar</p>
        <ul className="flex gap-4 text-xl text-lightGrey">
          {links.map((items, index) => {
            return (
              <li>
                <Link
                  to={items.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-145}
                  className="hover:text-white transition-all duration-500"
                >
                  {items.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-right text-lightBrown mx-auto mt-2 mb-12">
        © 2024 Abdelrahman | All Rights Reserved.
      </p>
    </div>
  );
};

export default FoooterMain;
