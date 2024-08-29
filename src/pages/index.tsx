import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroHomeContainer from "@/myComponents/HeroHomeContainer";
import OverviewSection from "@/myComponents/OverviewSection";
import Wave from "@/myComponents/Wave";
import TechStackSection from "@/myComponents/TechStackSection";
import ServiceSection from "@/myComponents/ServiceSection";
import ContactSection from "@/myComponents/ContactSection";
import ProjectSection from "@/myComponents/ProjectSection";

const Home: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroHomeContainer />
      </HeroSection>
      <Wave classNames="mt-36" />
      <OverviewSection />
      <TechStackSection />
      <ProjectSection isRecent />
      <ServiceSection />
      <ContactSection />
    </>
  );
};

export default Home;
