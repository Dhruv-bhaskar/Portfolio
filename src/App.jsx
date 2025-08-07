import "./App.css";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/Contactme section/ContactMeMain";
import ExperienceMain from "./components/Experience section/ExperienceMain";
import FoooterMain from "./components/footer section/FoooterMain";
import Helper from "./components/Helper";
import HeroGradient from "./components/hero section/HeroGradient";
import HeroMain from "./components/hero section/HeroMain";
import SubHeroSection from "./components/hero section/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectMain from "./components/project section/ProjectMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain/>
      <ProjectMain/>
      <ContactMeMain/>
      <FoooterMain/>
      <Helper/>
    </main>
  );
}

export default App;
