import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import SkillsSection from "@/myComponents/TechStackSection";
import HeroAboutContainer from "@/myComponents/HeroAboutContainer";
import Wave from "@/myComponents/Wave";
import ExperienceSection from "@/myComponents/ExperienceSection";

const About: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroAboutContainer />
      </HeroSection>
      <Wave classNames="mt-36" />
      <SkillsSection />
      <ExperienceSection />
    </>
  );
};
export default About;
