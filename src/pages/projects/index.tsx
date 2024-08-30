import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroProjectContainer from "@/myComponents/HeroProjectContainer";
import Wave from "@/myComponents/Wave";
import ProjectSection from "@/myComponents/ProjectSection";
import Head from "next/head";
import { getCanonicalUrl } from "@/utils/function";
import { NextSeo } from "next-seo";
const Project: FC = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={getCanonicalUrl("projects")}
          key="canonical"
        />
      </Head>
      <NextSeo title="My Project | Site of Khoi" />
      <HeroSection>
        <HeroProjectContainer />
      </HeroSection>
      <Wave classNames="mt-36" />
      <ProjectSection />
    </>
  );
};
export default Project;
