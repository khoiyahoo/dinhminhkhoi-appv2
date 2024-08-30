import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import SkillsSection from "@/myComponents/TechStackSection";
import HeroAboutContainer from "@/myComponents/HeroAboutContainer";
import Wave from "@/myComponents/Wave";
import ExperienceSection from "@/myComponents/ExperienceSection";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { getCanonicalUrl } from "@/utils/function";

const About: FC = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href={getCanonicalUrl("about")} key="canonical" />
      </Head>
      <NextSeo title="About Khoi | Site of Khoi" />
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
