import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import CardPortfolio from "@/myComponents/CardPortfolio";
import { TabsMenu } from "@/myComponents/TabsMenu";

const OverviewSection: FC = () => {
  return (
    <section className="rounded-t-3xl xl:rounded-t-[8.5rem] pt-12">
      <div className="container xl:px-52">
        <Typography size="normal" type="bold" variant="p">
          Introduction
        </Typography>
        <Typography
          size="normal"
          type="bold"
          variant="h4"
          className="text-2xl "
        >
          🗞️ OverView
        </Typography>
        <div className="w-full flex lg:flex-row flex-col items-start gap-4 mt-4">
          <div className="lg:w-[calc(100%-21.875rem)] w-full flex flex-col">
            <Typography
              size="normal"
              type="bold"
              variant="p"
              className="text-justify mb-4"
            >
              🌱 I&apos;m a web developer skilled in Sass, Bootstrap, and
              Tailwind for creating responsive UI. With expertise in TypeScript,
              React, React Native, Figma Design and Redux, I build scalable web
              apps that deliver exceptional user experiences. I prioritize clean
              coding and stay up-to-date with trends to exceed expectations.
              Let&apos;s work together on your next project.
            </Typography>
            <TabsMenu />
          </div>
          <CardPortfolio href="https://github.com/khoiyahoo" target="_blank" />
        </div>
      </div>
    </section>
  );
};
export default OverviewSection;
