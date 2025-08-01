import "./App.css";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import Helper from "./components/Helper";
import HeroGradient from "./components/hero section/HeroGradient";
import HeroMain from "./components/hero section/HeroMain";
import SubHeroSection from "./components/hero section/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import SkillsMain from "./components/skillsSection/SkillsMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <Helper/>
    </main>
  );
}

export default App;
