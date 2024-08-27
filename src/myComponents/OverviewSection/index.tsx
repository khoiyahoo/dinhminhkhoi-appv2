import { type FC } from "react";
import Typography from "@/myComponents/Typography";

const OverviewSection: FC = () => {
  return (
    <section className="rounded-t-3xl xl:rounded-t-[8.5rem] pt-12 h-[100vh]">
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
        <Typography
          size="normal"
          type="bold"
          variant="p"
          className="mt-4 text-justify"
        >
          🌱 I&apos;m a web developer skilled in Sass, Bootstrap, and Tailwind
          for creating responsive UI. With expertise in TypeScript, React, React
          Native, Figma Design and Redux, I build scalable web apps that deliver
          exceptional user experiences. I prioritize clean coding and stay
          up-to-date with trends to exceed expectations. Let&apos;s work
          together on your next project.
        </Typography>
      </div>
    </section>
  );
};
export default OverviewSection;
