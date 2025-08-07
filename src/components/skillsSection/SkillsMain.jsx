import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] overflow-hidden">
        <SkillsText />
        <div className="bottom-[50px] translate-x-[0%] mt-[12rem] hidden md:block">
         <AllSkills />
        </div>
        <div className="md:hidden">
          <AllSkillsSM/>
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
