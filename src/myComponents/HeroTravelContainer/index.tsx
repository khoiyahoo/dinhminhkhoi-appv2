import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import plane from "@/assets/images/airplane.png";
import Image from "next/image";
const HeroTravelContainer: FC = () => {
  return (
    <div className="flex justify-center flex-col pb-12 sm:flex-row">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <Image src={plane} alt="air-plane" width={30} height={30} />
          <Typography size="normal" type="bold" variant="h2">
            Travel
          </Typography>
        </div>
        <div className="flex items-center">
          <Typography
            size="small"
            type="bold"
            variant="p"
            className="mt-2 glitch text-lg"
          >
            Exploring new places and experiencing different cultures is
            something I truly love. I&apos;ve had the opportunity to travel to
            various destinations, each offering unique experiences and
            unforgettable memories. Traveling allows me to see the world from
            different perspectives and learn new things.
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default HeroTravelContainer;
