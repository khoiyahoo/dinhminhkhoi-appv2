import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import Image from "next/image";
import clipBoard from "@/assets/images/clipboard.png";
const HeroProjectContainer: FC = () => {
  return (
    <div className="flex justify-center flex-col pb-12 sm:flex-row">
      <div className="w-full">
        <div className="flex items-end gap-4">
          <Image src={clipBoard} alt="clip-board" width={50} height={50} />
          <Typography size="normal" type="bold" variant="h2">
            Projects
          </Typography>
        </div>
        <Typography
          size="small"
          type="bold"
          variant="p"
          className="mt-2 glitch text-lg"
        >
          I like to explore and explore, I have built a number of web and mobile
          projects. Below are some projects I did and participated in when I was
          in school and working
        </Typography>
      </div>
    </div>
  );
};
export default HeroProjectContainer;
