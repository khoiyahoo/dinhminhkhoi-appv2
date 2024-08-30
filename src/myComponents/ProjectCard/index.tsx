import BadgeCard from "@/myComponents/BadgeCard";
import Typography from "@/myComponents/Typography";
import { type FC } from "react";
import Link from "next/link";
import { github, live } from "@/assets/images";
import Image from "next/image";

interface Props {
  href: string;
  icon?: string;
  src?: string;
  title: string;
  openSource: boolean;
  description: string;
  responsibility: string;
  tags: string[];
}
const ProjectCard: FC<Props> = ({
  href = "/",
  title,
  icon,
  src,
  description,
  responsibility,
  tags,
  openSource,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="max-w-full group cursor-pointer h-full"
    >
      <div className="w-full h-full bg-primary p-[1px] pl-[3px] rounded-[1.25rem] shadow-discovery-card-orange-100 ease-in-out duration-100 hover:bg-conversion-01 hover:-translate-y-1">
        <div className="bg-text-100 h-full rounded-[1.25rem] py-3 px-4 flex flex-col gap-4">
          <div className="flex gap-1 items-center justify-between">
            <div className="flex gap-1 items-center">
              {icon && <span>{icon}</span>}
              {src && (
                <Image
                  src={src as string}
                  alt="icon website"
                  width={16}
                  height={16}
                />
              )}
              <Typography
                size="normal"
                type="bold"
                variant="h4"
                className="text-gray-500"
              >
                {title}
              </Typography>
            </div>
            <Image
              src={openSource ? github : live}
              alt="anh"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <Typography
              size="small"
              type="bold"
              variant="p"
              className="text-text-500"
            >
              {description}
            </Typography>

            <Typography
              size="small"
              type="bold"
              variant="p"
              className="text-text-500"
            >
              ✏️ Responsibility: {responsibility}
            </Typography>
          </div>

          <div className="flex gap-1">
            {tags?.map((item, index) => (
              <BadgeCard
                key={index}
                logo={item}
                className="p-1 m-0 w-fit h-fit [&>img]:mr-0"
                classNameImg="grayscale group-hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
