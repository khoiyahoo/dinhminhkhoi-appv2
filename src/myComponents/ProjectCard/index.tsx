import { cn } from "@/lib/utils";
import { useRef, type FC } from "react";
import Typography from "@/myComponents/Typography";
import Link from "next/link";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import type { LightGallery as LGInstance } from "lightgallery/lightgallery";
import BadgeCard from "@/myComponents/BadgeCard";
import { RiImageCircleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CgLivePhoto } from "react-icons/cg";
interface Props {
  href: string;
  icon?: string;
  src?: string;
  title: string;
  openSource: boolean;
  live: boolean;
  description: string;
  responsibility: string;
  colorCircle: string;
  colorOverlay: string;
  tags: string[];
  imagePreview?: string[];
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
  live,
  colorCircle,
  colorOverlay,
  imagePreview,
}) => {
  const STYLE_MAPPING: Record<string, string> = {
    overlay:
      "absolute top-10 z-0 h-8 w-8 rounded-full transition-all duration-500 group-hover:scale-[50]",
    "circle-card":
      "grid h-8 w-8 place-items-center rounded-full transition-all duration-500 relative group-hover:bg-white",
    "circle-around":
      "absolute w-[90%] h-[90%] rounded-full flex items-center justify-center flex-col",
  };
  const lightGalleryRef = useRef<LGInstance | null>(null);

  const openGallery = () => {
    lightGalleryRef.current?.openGallery?.();
  };
  return (
    <div
      className="max-w-full h-full group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all rounded-[1.25rem] duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        boxShadow: `0px 0px 5px 0px rgba(240, 240, 240, 0.40) inset, 0px 0px 8px 0px ${colorOverlay}`,
      }}
    >
      <span
        className={cn(STYLE_MAPPING["overlay"])}
        style={{ backgroundColor: `${colorOverlay}` }}
      ></span>
      <div className="relative z-10 w-full">
        <div className="flex justify-between">
          <div
            className="flex items-start gap-2"
            style={{ color: `${colorOverlay}` }}
          >
            <span className={cn(STYLE_MAPPING["circle-card"])}>
              <span
                className={cn(STYLE_MAPPING["circle-around"])}
                style={{ backgroundColor: `${colorCircle}` }}
              >
                {icon && <span>{icon}</span>}
                {src && (
                  <Image
                    src={src as string}
                    alt="icon website"
                    width={16}
                    height={16}
                  />
                )}
              </span>
            </span>
            <Typography
              size="normal"
              type="bold"
              variant="h4"
              className="group-hover:text-white"
            >
              {title}
            </Typography>
          </div>

          <div className="flex gap-1 w-fit h-fit cursor-pointer item-center justify-center">
            {imagePreview && !!imagePreview.length && (
              <div onClick={openGallery} className="w-[1.3rem] h-[1.3rem]">
                <RiImageCircleFill className="w-full h-full text-black group-hover:text-white" />
              </div>
            )}

            {openSource && (
              <Link
                href={href}
                target="_blank"
                className="w-[1.15rem] h-[1.15rem] block mt-[1px]"
              >
                <FaGithub className="w-full h-full text-black group-hover:text-white" />
              </Link>
            )}

            {live && (
              <Link
                href={href}
                target="_blank"
                className="w-[1.15rem] h-[1.15rem] block mt-[1px]"
              >
                <CgLivePhoto className="w-full h-full text-black group-hover:text-white" />
              </Link>
            )}
          </div>
        </div>
        <div
          className="pt-5 text-base leading-7 transition-all duration-300 h-[125px] overflow-hidden"
          style={{ color: `${colorOverlay}` }}
        >
          <div className="flex flex-col transition-all duration-300 h-full">
            <div className="transition-all duration-100 flex-shrink-0 h-full group-hover:h-0 overflow-hidden">
              <Typography size="small" type="bold" variant="p">
                {description}
              </Typography>
            </div>
            <div className="transition-all duration-100 flex-shrink-0 h-0 group-hover:h-full group-hover:text-text-100 overflow-hidden">
              <Typography size="small" type="bold" variant="p">
                ✏️ Responsibility: {responsibility}
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-4">
          {tags?.map((item, index) => (
            <BadgeCard
              key={index}
              logo={item}
              className="p-1 m-0 w-fit h-fit [&>img]:mr-0 group-hover:border-white"
              classNameImg="grayscale group-hover:grayscale-0"
            />
          ))}
        </div>
      </div>
      {imagePreview && !!imagePreview.length && (
        <div className="hidden">
          <LightGallery
            speed={500}
            plugins={[]}
            addClass="our-gallery"
            onInit={(ref) => {
              if (ref) {
                lightGalleryRef.current = ref.instance;
              }
            }}
          >
            {imagePreview.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="light-icon"
                width={1000}
                height={1000}
              />
            ))}
          </LightGallery>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
