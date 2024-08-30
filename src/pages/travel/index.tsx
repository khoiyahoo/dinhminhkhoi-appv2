import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroTravelContainer from "@/myComponents/HeroTravelContainer";
import Wave from "@/myComponents/Wave";
import TravelSection from "@/myComponents/TravelSection";

const Travel: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroTravelContainer />
      </HeroSection>
      <Wave classNames="mt-36" />
      <TravelSection />
    </>
  );
};
export default Travel;
