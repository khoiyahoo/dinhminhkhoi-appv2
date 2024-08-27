import { type FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import iconWork from "@/assets/images/working-at-home.png";
import Image from "next/image";
import Typography from "@/myComponents/Typography";
import BadgeCard from "@/myComponents/BadgeCard";
import { PRIMARY_TECH } from "@/constants/dummy";
interface Props {
  href: string;
  target?: string;
  className?: string;
}

const CardPortfolio: FC<Props> = ({
  target = "_self",
  href,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "bg-card-portfolio bg-cover lg:w-[21.875rem] w-full h-[25rem] rounded-2xl shadow-xl cursor-pointer",
        className
      )}
    >
      <Link
        href={href}
        target={target}
        className="flex flex-col justify-center items-center w-full h-full pt-[7rem] px-10 pb-10"
      >
        <div className="w-[6.25rem] h-[6.25rem] bg-gray-200 rounded-full shadow-circle">
          <Image src={iconWork} alt="icon-portfolio" width={100} height={100} />
        </div>
        <div className="flex flex-col justify-start items-center gap-2 w-full h-full">
          <Typography
            size="normal"
            type="bold"
            variant="p"
            className="text-black text-2xl"
          >
            Dinh Minh Khoi
          </Typography>
          <Typography
            size="extraSmall"
            type="regular"
            variant="p"
            className="text-black"
          >
            @khoidinh・<span className="text-gray-200">Aug 25th 2023</span>
          </Typography>
          <Typography
            size="extraSmall"
            type="regular"
            variant="p"
            className="text-black"
          >
            Web Developer
          </Typography>
          <div className="flex flex-wrap gap-2 w-full justify-center">
            {PRIMARY_TECH.map((item, index) => (
              <BadgeCard title={item} key={index} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardPortfolio;
