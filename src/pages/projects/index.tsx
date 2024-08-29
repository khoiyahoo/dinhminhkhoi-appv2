import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroProjectContainer from "@/myComponents/HeroProjectContainer";
import Wave from "@/myComponents/Wave";
import ProjectSection from "@/myComponents/ProjectSection";
const Project: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroProjectContainer />
      </HeroSection>
      <Wave classNames="mt-36" />
      <ProjectSection />
    </>
  );
};
export default Project;
