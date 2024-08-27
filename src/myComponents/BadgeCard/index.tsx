import { type FC } from "react";
import Image from "next/image";
import Typography from "@/myComponents/Typography";
import { cn } from "@/lib/utils";

interface Props {
  title?: string;
  logo?: string;
  className?: string;
  classNameImg?: string;
}

const BadgeCard: FC<Props> = ({
  title,
  logo,
  className = "",
  classNameImg = "",
}) => {
  return (
    <div
      className={cn(
        "badge border border-black rounded-md py-1 px-2 flex justify-center items-center shadow-lg w-fit",
        className
      )}
    >
      {logo && (
        <Image
          src={logo}
          alt="ảnh"
          width={20}
          height={20}
          className={cn("mr-2", classNameImg)}
        />
      )}
      <Typography
        size="extraSmall"
        type="bold"
        variant="p"
        className="text-gray-500"
      >
        {title}
      </Typography>
    </div>
  );
};

export default BadgeCard;
