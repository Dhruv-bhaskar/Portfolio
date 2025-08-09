import React from "react";
import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <Link to="home" smooth={true} spy={true} duration={500} offset={-145}>
        <h1 className="text-white text-2xl font-bold hidden sm:block cursor-pointer">
          Dhruv Kumar Bhaskar
        </h1>
      </Link>
      <Link to="home" smooth={true} spy={true} duration={500} offset={-145}>
        <h1 className="text-white text-2xl font-extrabold sm:hidden cursor-pointer">DK</h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;
