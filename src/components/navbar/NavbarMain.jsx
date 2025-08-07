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
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed top-[1.3rem] left-[50%] -translate-x-[50%] z-20 flex gap-4">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-1 border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div onClick={toggleMenu} className="flex justify-center items-center p-6 lg:hidden bg-black rounded-full border border-orange">
        <button className="text-2xl p-3 text-white border border-orange rounded-full">
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
