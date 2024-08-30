import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import Image, { type StaticImageData } from "next/image";
import Wave from "@/myComponents/Wave";
import { cn } from "@/lib/utils";
interface Props {
  title: string;
  subTitle: string;
  src: StaticImageData;
  classNames?: string;
  classNamesIcon?: string;
}
const ServiceCard: FC<Props> = ({
  title,
  subTitle,
  src,
  classNames = "",
  classNamesIcon = "",
}) => {
  return (
    <div
      className={cn(
        "w-full min-h-[190px] relative rounded-md group flex flex-col justify-between",
        classNames
      )}
    >
      <div
        className={cn(
          "absolute top-[-20%] left-[20%] w-[80px] h-[80px] rounded-full bg-gray-600 shadow-xl flex justify-center items-center transform transition-transform duration-300 group-hover:translate-x-4",
          classNamesIcon
        )}
      >
        <Image
          src={src}
          alt="img-service-card"
          width={30}
          height={30}
          className="filter drop-shadow-2xl"
        />
      </div>
      <div className="w-full min-h-[160px] pt-12 px-6">
        <Typography size="normal" type="bold" variant="p" className="text-left">
          {title}
        </Typography>
        <Typography size="small" type="bold" variant="p" className="text-left">
          {subTitle}
        </Typography>
      </div>
      <Wave classNameWave="waves-card rounded-b-md" classNames="mt-8" />
    </div>
  );
};

export default ServiceCard;
