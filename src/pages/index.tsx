import { type FC } from "react";
import HeroSection from "@/myComponents/HeroSection";
import HeroHomeContainer from "@/myComponents/HeroHomeContainer";
import OverviewSection from "@/myComponents/OverviewSection";
import TechStackSection from "@/myComponents/TechStackSection";
import ServiceSection from "@/myComponents/ServiceSection";
import ContactSection from "@/myComponents/ContactSection";
import ProjectSection from "@/myComponents/ProjectSection";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Cloud3D from "@/myComponents/Cloud3D";
const Home: FC = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${process.env.baseUrl}` || "https://dinhminhkhoi.vercel.app/"}
          key="canonical"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <NextSeo title="Hi'Im Khoi | Site of Khoi" />
      <HeroSection>
        <HeroHomeContainer />
      </HeroSection>
      <Cloud3D />
      <OverviewSection />
      <TechStackSection />
      <ProjectSection isRecent />
      <ServiceSection />
      <ContactSection />
    </>
  );
};

export default Home;
