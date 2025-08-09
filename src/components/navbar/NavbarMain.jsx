import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="max-w-[1200px] mx-auto px-4 w-full h-[5rem] sm:h-[6rem] fixed top-[1.3rem] left-0 sm:left-[50%] sm:-translate-x-[50%] z-20 flex gap-4">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-1 border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div onClick={toggleMenu} className="flex justify-center items-center px-[1.2rem] h-[5rem] my-auto lg:hidden bg-black rounded-full border border-orange">
        <button className="text-md p-3 text-white border border-orange rounded-full">
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
