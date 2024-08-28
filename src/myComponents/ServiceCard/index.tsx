import { type FC } from "react";
import Typography from "@/myComponents/Typography";
import Image, { type StaticImageData } from "next/image";
import Wave from "@/myComponents/Wave";
interface Props {
  title: string;
  subTitle: string;
  src: StaticImageData;
}
const ServiceCard: FC<Props> = ({ title, subTitle, src }) => {
  return (
    <div className="w-full min-h-[190px] relative rounded-md border border-primary shadow-xl">
      <div className="absolute top-[-20%] left-[20%] w-[80px] h-[80px] rounded-full bg-gray-600 shadow-circle flex justify-center items-center">
        <Image src={src} alt="img-service-card" width={30} height={30} />
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
