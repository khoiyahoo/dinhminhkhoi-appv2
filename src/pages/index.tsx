import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroHomeContainer from "@/myComponents/HeroHomeContainer";

const Home: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroHomeContainer />
      </HeroSection>
    </>
  );
};

export default Home;
