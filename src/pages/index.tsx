import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroHomeContainer from "@/myComponents/HeroHomeContainer";
import OverviewSection from "@/myComponents/OverviewSection";
import Wave from "@/myComponents/Wave";

const Home: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroHomeContainer />
      </HeroSection>
      <Wave classNames="mt-40" />
      <OverviewSection />
    </>
  );
};

export default Home;
