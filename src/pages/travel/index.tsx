import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroTravelContainer from "@/myComponents/HeroTravelContainer";
import Wave from "@/myComponents/Wave";
import TravelSection from "@/myComponents/TravelSection";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { getCanonicalUrl } from "@/utils/function";

const Travel: FC = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={getCanonicalUrl("travel")}
          key="canonical"
        />
      </Head>
      <NextSeo title="Explore Travel | Site of Khoi" />
      <HeroSection>
        <HeroTravelContainer />
      </HeroSection>
      <Wave classNames="mt-36" />
      <TravelSection />
    </>
  );
};
export default Travel;
