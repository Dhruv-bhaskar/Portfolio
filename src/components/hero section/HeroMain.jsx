import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div id="home" className="pt-38 pb-16">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
